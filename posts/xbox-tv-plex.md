---
title: "Using an Xbox TV Tuner with TVHeadEnd and Plex"
metaTitle: "Using an Xbox TV Tuner with TVHeadEnd and Plex"
metaDesc: "A cost effective way to get over the air TV on your media server"
album: "https://imgur.com/a/2ne3AcJ"
date: "2022-06-11"
---

Plex is a great solution for aggregating movies, TV shows and music. As part of its premium offering, Plex Pass, it also integrates live TV and a DVR into a nice UI. I wanted to use these features to watch and record sports and local shows that weren't accessible via streaming services.

![Live TV on Plex](https://i.imgur.com/rQOpjCN.jpg)

To get started with adding live TV to Plex, we require a compatible network-attached digital tuner. The [hardware options supplied by Plex](https://support.plex.tv/en-au/?p=39109) were more targeted towards the American market, and being in Australia, getting access to these were pricy or difficult. Not to mention they also might not be compatible with the more common DVB standards used here [(and the rest of the world)](https://dvb.org/solutions/dtt-deployment-data/).

![DVB Usage](https://dvb.org/wp-content/uploads/2022/01/dtt_system_choice_map_1221-1024x670.png)

The cheapest available tuner Plex officially supports is AUD$110 - for occasionally recording [the footy](https://en.wikipedia.org/wiki/Australian_Football_League), this wasn't something I wanted to go with. Since you could find USB TV tuners on AliExpress and eBay for under AUD$15, I was sure I could find a cheaper solution.

That led to me discovering the Xbox TV Tuner, a little USB dongle that Microsoft sells to integrate over the air TV with the Xbox. This dongle uses a very well documented [Panasonic MN88472](https://linuxtv.org/wiki/index.php/Panasonic_MN88472) chip with stable drivers, it's still being manufactured and best of all, it retails for AUD$10-20 here in Australia.

Plex isn't able to integrate directly with a USB TV tuner, so we need to have TVHeadEnd act as a middleman for us. TVHeadEnd reads our tuner and then publishes it as an internet stream. We also need a proxy for Plex to hook into TVHeadEnd (which presents itself as a device that Plex supports).

![Diagram](https://i.imgur.com/hFaUJUC.png)

## Setup

### Firmware

Plug in your TV tuner,

Get the [firmware here](https://github.com/armbian/firmware/raw/master/dvb-demod-mn88472-02.fw) and copy it to your `/lib/firmware/` directory - or run the following:

```
sudo curl https://github.com/armbian/firmware/raw/master/dvb-demod-mn88472-02.fw --output /lib/firmware/dvb-demod-mn88472-02.fw
```

Restart your machine to apply the firmware.

Run `lsusb` to make sure the device is connected and is recognised correctly, you should see something like:

```
Bus 001 Device 002: ID 045e:02d5 Microsoft Corp. Xbox One Digital TV Tuner
```

### TVHeadEnd

You could install TVHeadEnd directly but I prefer to use the [Docker image](https://github.com/linuxserver/docker-tvheadend) created by the awesome folks at LinuxServer.io.

Modify this Docker run command according to your needs, remember to passthrough your tuner.

```sh
docker run
    --name tvheadend \
    -v /apps/tvheadend:/config \
    -v /data/tv/recordings:/recordings \
    -p 9981:9981 \
    -p 9982:9982 \
    -e PUID=1001 \
    -e PGID=100 \
    -e TZ=Australia/Perth \
    --device /dev/dvb/adapter0:/dev/dvb/adapter0 \
    lscr.io/linuxserver/tvheadend
```

Or even better, use the following Docker compose:

```yaml
version: "2.1"
services:
  tvheadend:
    image: lscr.io/linuxserver/tvheadend
    container_name: tvheadend
    environment:
      - PUID=${PUID}
      - PGID=${PGID}
      - TZ=${TZ}
    volumes: # Update this to match your paths
      - /apps/tvheadend:/config
      - /data/tv/recordings:/recordings
    devices:
      - /dev/dvb/adapter0:/dev/dvb/adapter0
    ports:
      - 9981:9981
      - 9982:9982
    restart: unless-stopped
```

Start the container, and then connect to the TVHeadEnd web interface via `http://localhost:9981` or whatever IP/ port you have set.

By default it should be unauthenticated and now you should see this blank screen with the Electronic Program Guide tab:

![TVHeadEnd Startup Screen](https://i.imgur.com/wDyynqt.png)

Now onto the click-ops

#### Setting up Networks

Click the **Configuration** tab, then **DVB Inputs**, then **Networks**

1. Click the "Add" button - you should see an "Add Network" pop up box
2. Use the dropdown to select "DVB-T Network"
3. Tick "Enabled"
4. Set your "Network name" to anything, I used "Perth OTA"
5. Set "Pre-defined muxes" to your regions local TV
6. Click "Create"

![Network Configuration](https://i.imgur.com/btejWZx.png)

You should see the new network created and listed in the table.

_Note: If you are in North America, instead of selecting "DVB-T Network", select "ATSC-T Network"._

#### Enabling Tuner and Attaching Network

Click the **Configuration** tab, then **DVB Inputs**, then **TV Adapters**

You should see your Xbox TV tuner, listed as the Panasonic chipset. Both adapters are currently inactive, since we're only using DVB-T for [terrestrial television](https://en.wikipedia.org/wiki/Terrestrial_television), I'll only be enabling that particular adapter.

1. Click "Panasonic MN88472 #0 : DVB-T #0"
2. In the right panel, tick "Enabled"
3. Tick "Over-the-air EPG"
4. Set "Networks" to the name of the network you created
5. Click "Save"

![Tuner Configuration](https://i.imgur.com/daJpiGc.png)

Your tuner should now be enabled - Notice the green dot next to the adapter.

_Note: If you are using DVB-C, change the previous network configuration where applicable._

#### Running a Scan and Adding Channels

Navigate back to the **Networks** tab, then click on the network you created previously. In the menu bar above, click "Force Scan". (You might not have to do this, but just to be explicit).

There isn't a good indicator that anything is happening, so I recommend you check out your Docker container logs `docker logs -f tvheadend` if you want to see the activity.

```
[ NOTICE] START: HTS Tvheadend version 4.3-2023~g26713c1e4 started, running as PID:356 UID:1001 GID:100, CWD:/run/s6/services/tvheadend CNF:/config
[   INFO] mpegts: 219.5MHz in Perth OTA - tuning on Panasonic MN88472 #0 : DVB-T #0
...
```

Give it a bit of time, and then navigate to the **Services** tab, next to **Networks**.

You should see it populated with channels TVHeadEnd has found via the scan.

Now to add the channels - go to **Configuration**, then **Channel/ EPG**, then **Channels**.

1. Click "Map Services"
2. In the dropdown select "Map All Services"
3. In the "Services" dropdown, check that all channels are ticked
4. Click "Map Services"

![Mapping Configuration](https://i.imgur.com/eaLbyCR.png)

Wait for the mapping to be run, then navigate back to the **Channels** tab, you should now see the channels there! We're pretty much done on the TVHeadEnd configuration side, and you can just use it as is without Plex.

Pro tip: Download the file from `http://TV_HEADEND_IP:PORT/playlist/channels.m3u` or paste the URL into VLC, MPV, etc. to get a playlist of all channels for streaming directly.

![VLC Streaming](https://i.imgur.com/rWMq1Zv.png)

### TVHeadEnd Proxy

Now to hook up TVHeadEnd with Plex, we're going to use a proxy which runs a Flask server that mocks all the channel discovery endpoints of the Silicondust HDHomeRun, a device that Plex supports. Thanks to GitHub user [@jkaberg](https://github.com/jkaberg) for creating the proxy and [@chkuendig](https://github.com/chkuendig/tvhProxy) and [@nphmuller](https://github.com/nphmuller/tvhProxy) who have made various fixes to the proxy and whose forks we use.

1. Clone `git clone https://github.com/nphmuller/tvhProxy.git` or [download the ZIP](https://github.com/nphmuller/tvhProxy/archive/refs/heads/master.zip)
2. In the repository folder, run the following commands:

```
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

3. Test by running `python tvhProxy.py`, you should see the following

```
INFO:root:Registering upnp:rootdevice (http://127.0.1.1:5004/device.xml)
INFO:root:Sending alive notification for uuid:12345678::upnp:rootdevice
INFO:root:SSDP command NOTIFY * - from YOUR_IP:1900
INFO:root:SSDP command NOTIFY * - from YOUR_IP:1900
```

4. Edit the `tvhProxy.service` file with correct paths (`WorkingDirectory` & `ExecStart`)
5. Make sure the `tvhProxy.sh` file is executable with `chmod +x tvhProxy.sh`
6. Register the proxy as a service by running the following commands:

```
sudo cp tvhProxy.service /etc/systemd/system/tvhProxy.service
sudo systemctl daemon-reload
sudo systemctl enable tvhProxy.service
sudo systemctl start tvhProxy.service
```

Check the service status by running `systemctl status tvhProxy.service`. You should see:

```
● tvhProxy.service - A simple proxy for Plex and Tvheadend
     Loaded: loaded (/etc/systemd/system/tvhProxy.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2022-06-11 15:30:13 AWST; 3min 29s ago
   Main PID: 3638734 (tvhProxy.sh)
      Tasks: 3 (limit: 38289)
     Memory: 27.7M
     CGroup: /system.slice/tvhProxy.service
             ├─3638734 /bin/bash /app/data/tvhProxy/tvhProxy.sh
             └─3638737 python tvhProxy.py
```

If it has failed to start, check the logs.

### Plex

Now the proxy has been setup, we can finally add TVHeadEnd to Plex.

1. Navigate to "Settings"
2. In the sidebar, under the "Manage" category, click "Live TV & DVR"
3. Add a device
4. Plex will scan for the device, this often fails so click "Don't see your HDHomeRun device? Enter its network address manually"
5. Enter the IP address of the proxy server (as setup previously) - Don't use `localhost` as it seems to fail
6. Follow the steps to add channels, Plex will query your proxy for the channels

The proxy workaround still can be unstable at times, especially with multiple streams, but it works quite well regardless.

You can navigate to the "Live TV & DVR" library on Plex and start using it now!
