---
title: "A look at the risks and prevelance of internet connected cameras"
metaTitle: "A look at the risks and prevelance of internet connected cameras"
metaDesc: "TLDR: Dont expose your cameras to the world wide web"
album: ""
date: "2022-06-20"
---

There's a website that has been [cropping up on the news now and then](https://www.abc.net.au/news/2014-11-07/security-camera-footage-from-homes-businesses-streaming-on-web/5875084) called **Insecam**, it lists thousands of publicly accessible security cameras worldwide. Most are intended to be open and viewable to the public, i.e. tourist and traffic cameras, however it previously hosted cameras that were not.

Before it garnered the attention of press, it had listed thousands more cameras that were inside people's homes and businesses. Now they have the following disclaimer on their site:

> The following actions were made to Insecam for the protection of individual privacy:
>
> - Only filtered cameras are available now. This way none of the cameras on Insecam invade anybody's private life.
> - Any private or unethical camera will be removed immediately upon e-mail complaint. Please provide a direct link to help facilitate the prompt removal of the camera.
> - If you do not want to contact us by e-mail, you can still remove your camera from Insecam. The only thing you need to do is to set the password of your camera.

The cameras are no longer listed but many are still publicly accesible online. People continually expose their cameras to the world wide web either accidentally or on purpose, without knowing the risks that come with it.

The loss of privacy isn't the only impact that this has. These cameras can become entrypoints to your homes network, letting a malicious actor gain access to other devices. It can impact others also, becoming parts of botnets like Mirai and participating in devasting DDoS attacks on critical web infrastructure.

![Shodan Hikvision Map](https://i.imgur.com/bPT3Vbk.jpg)

## Notable Manufacturers and Vulnerabilities

In the enterprise space, manufacturers such as [Axis, Dahua and Hikvision still dominate](https://www.securitysolutionsmedia.com/2018/12/13/cctv-market-australia-new-zealand/), with both the latter being partially Chinese state owned. The increased market of affordable home surveillance has meant many manufacturers have risen to fill this demand. The aforementioned companies do sell products to target private individuals, but moreso Hikvision and Dahua, with Axis still being a very expensive option (however much more secure as we will find out).

Unfortunately, some manufacturers take a lax attitude towards security. Some of these security vulnerabilities include backdoors in their devices, and the double whammy of not prompting users to change default passwords and setting the default password to... nothing.

![Blank Password](https://i.imgur.com/7AKiFcv.png)

One of the worst offenders is Xiongmai. Their products have been well documented by [SEC Consult](https://sec-consult.com/blog/detail/millions-of-xiongmai-video-surveillance-devices-can-be-hacked-via-cloud-feature-xmeye-p2p-cloud/) and [KrebsOnSecurity](https://krebsonsecurity.com/2018/10/naming-shaming-web-polluters-xiongmai/) (Recommend a read) for their atrocious approach to security (that picture above is on a Xiongmai device).

Xiongmai devices come in all shapes and forms, they are a white-label manufacturer and brand their products dozens of different names. These devices are found all over eBay Australia, eBay UK and Amazon US. They are priced very competitively and have thousands of units sold. The first page for "CCTV" on eBay Australia yields rows of Xiongmai white label brands just on the first page.

![eBay Australia Xiongmai](https://i.imgur.com/trrxu25.png)

Here's some of the vulnerabilities found in surveillance systems:

- Empty/ Insecure default credentials
- Plain text handling of credentials
- Insecure P2P protocols
- [Backdoors placed on their devices](https://seclists.org/fulldisclosure/2017/Sep/23)
  - Many Hikvision devices still have this backdoor

### Default Passwords

The Mirai botnet proved that most of these connected devices have never had their [default passwords](https://krebsonsecurity.com/wp-content/uploads/2016/10/IoTbadpass-Sheet1.pdf) changed.

![Passwords](https://i.imgur.com/N0Za0ar.png)

### P2P Protocol

A neat feature of some of these devices is P2P remote access. This enables the user to view the camera from anywhere without fiddling with port forwarding and firewalls. However this just places the trust into the P2P being secure. Spoiler alert: it isn't.

## Statistics

Using Shodan, a port scanning utility, we can get a general overview of how many surveillance systems are being exposed.

Defeway:
Hikvision: http.favicon.hash:999357577

Writing a simple scraper, I grabbed a total of **728,088** IPs from Shodan in

This scraper was run for a few hours on the AWS platform, on the 10th of January 2021. Over that time unique IPs were gathered that corresponded to multiple camera manufacturers.

An example extract of this data is shown below

`Axis Communications,http://REDACTED:8082/mjpg/video.mjpg,2021-01-10 01:35:15.385221,shodan,False,y`

Once these IPs were gathered, the process began to check which ones were online, due to various factors such as dynamic IPs and network conditions not every camera would be online.

This check ran over a day, and yielded a count of **78,319** online cameras that were accessible via the www due to known vulnerabilities, misconfiguration, and/or usage of default credentials.

When a camera is found to be online, geolocation information is attached, resulting in the following representation of a camera:

### Responses to authenticated requests

😬

## Mitigation

Overall, hopefully this is a lesson on why should never expose your cameras to the world wide web. You might consider doing so for remote access, but definitely seek other approaches.

- Set passwords on **all accounts**
  - Many vendors leave no passwo
- Never, ever, expose your CCTV system directly to the world wide web
- Avoid using the vendor provided remote access software
  - Use your cameras ONVIF/ RTSP stream and apps (TinyCam)
-

// Talk about white label cameras
// Xiongmai and their brands
// PTZ, DVR sets
// Shodan results

## Secure Remote Access

There are a multitude of different brands but many of them come from one company, Xiongmai. They stock a large collection of white label systems, which they can then brand for various markets, or sell onto people to rebrand themselves.

A search on eBay Australia search for "CCTV" yields a page where the first 2 rows are all Xiongmai OEM (UL-Tech, Zosi, Jooan, Sannce, Anran). These listings have thousands sold, and it's a similar story for eBay UK and Amazon US.

Xiongmai has a very bad track record when it comes to security, and it isn't the only manufacturer to have all these issues, even large manufacturers such as Hikvision aren't safe. Often people are making the fatal mistake of exposing these devices directly to the world wide web, and the numbers still show that there are plenty exposed.
