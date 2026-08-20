---
title: "Gumroad Mediaconverter (GRMC)"
type: tool
date_added: 2025-09-19
source: "https://github.com/antiwork/mediaconverter"
tags: [video-processing, ffmpeg, hls, go, self-hosting]
via: "Twitter bookmark from @shl"
---

Gumroad Mediaconverter (GRMC) is a Go service that turns source video files into HLS streaming renditions with FFmpeg. It provides an authenticated conversion queue, configurable output presets such as 480p and 720p, job-status inspection, and callback support for asynchronous media workflows. Gumroad open-sourced it after finding that self-hosting on Hetzner reduced video-conversion costs substantially compared with AWS MediaConvert.

## Key Features

- Accepts authenticated conversion jobs that reference source and destination S3 URIs.
- Produces configurable HLS renditions through FFmpeg presets.
- Limits concurrent work with a 429 response and exposes running jobs through a status endpoint.
- Supports completion callbacks and health checks, with Docker and Kamal deployment guidance.

## Links

- [GitHub](https://github.com/antiwork/mediaconverter)
- [Original Tweet](https://x.com/shl/status/1968993188422484213)
