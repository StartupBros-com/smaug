---
title: "Seedance 2.0 Complete Production Guide"
type: article
date_added: 2026-03-28
source: "https://x.com/i/article/2037925192312160256"
author: "Amir D (@starks_arq)"
tags: [ai-video, content-creation]
via: "Twitter bookmark from @ziwenxu_"
---

Seedance 2.0 is ByteDance's AI video model accessible via CapCut with an Indonesian VPN — no waitlist. Generates clips up to 15 seconds at 720p. The key mental shift: stop thinking "generate a video" and start thinking "generate shots," then stitch them in post.

## Access

Download CapCut, set VPN to Indonesia. Full access to Seedance 2.0, no API application needed.

## Workflow Decision

**No consistent characters needed:** Text-to-video. Lock a style anchor in a base prompt, generate scene by scene. Seedance generates audio + video in the same pass.

**Consistent characters needed:** Build storyboard frames in Nano Banana Pro first (it self-corrects for character consistency), then run each frame into Seedance as image-to-video. The image carries identity; the prompt adds motion.

## Prompt Structure (5 blocks, every prompt)

1. **SUBJECT** — who/what is in frame, wardrobe, setting, mood. Be specific and physical.
2. **ACTION** — one single verb. One motion only. Multiple verbs confuse the model every time.
3. **CAMERA** — framing + movement. Movement keywords: "slow dolly push-in," "lateral tracking shot," "static locked-off frame," "orbital movement around subject," "crane up," "handheld drift," "Steadicam follow," "POV shot." Speed modifiers matter ("slowly" vs "rapidly" produces dramatically different output). Don't stack more than two moves.
4. **STYLE** — one aesthetic anchor + lighting + color. Single keywords like "cinematic" do nothing. Use reinforcement pairs: "Motivated warm lighting, natural film grain, shallow depth of field, lifted blacks." Film stock anchors: "Kodak Vision3 500T" (warm), "ARRI Alexa color science" (high-end digital), "35mm film grain" (indie). Top lighting keywords by response strength: "Motivated lighting," "Practical light sources visible in frame," "Warm tungsten bounce," "Volumetric dust particles," "Negative fill."
5. **QUALITY SUFFIX** — on every single prompt: *"4K, Ultra HD, Rich details, Sharp clarity, Cinematic texture, Natural colors, Stable picture."*

## Prompt Length

- Text-to-video: 120–280 words. Below 30 words = random output; above 280 = instructions dropped.
- Image-to-video: 50–80 words maximum. Long prompts erode the reference image — the model splits attention between text and image, causing character drift.
- Never use negative prompts. Use positive framing only: "Stable picture, sharp clarity" not "no blur."

## Reference Image System

Supports up to 12 reference files: 9 images, 3 videos, 3 audio.

- **@Image1** gets 40–50% more attention weight than any other slot. Most important reference always goes in slot one.
- For character consistency: 3 images per character (front, three-quarter, profile) = 75–85% identity consistency across scenes.
- Use individual face crops, never grid sheets. Turnaround grids cause mosaic confusion.
- For image-to-video: open prompt with "@Image1 as the first frame." No character descriptions — the image carries identity. Over-describing the character in text actively erodes the reference.
- Identity lock phrase: *"Same person as @Image1. Do not alter facial proportions, eye shape, or hairstyle."*

## Chinese Prompt Technique

Seedance trained heavily on Chinese-language data. Certain visual concepts map more precisely in Mandarin: spatial relationships, fabric textures, weather descriptions, architectural detail. Write prompt in English (5-block structure), translate to Mandarin, run both versions. The Chinese version often nails material properties and environmental nuance (fabric moving under wind, rain hitting stone, light refracting through glass) where English stays soft. Test both on every project — 5 minutes of translation regularly saves an hour of re-generation.

## Viral Content Strategy

Seedance is fast enough to ride real-time trends. Process:

1. Set notifications on **Polymarket**.
2. When a topic spikes (celebrity moment, political event, cultural flashpoint), you have a window of a few hours where demand is massive and almost nobody has video yet.
3. Open CapCut, generate 4–5 scenes, stitch into a 30–50 second video, post.
4. You're the first person with a high-quality AI video about something that just happened — the algorithm pushes you hard because you're the only supply for massive demand.

## CapCut Limitation

CapCut blocks photorealistic human generation. Animated characters, illustrated styles, environments, and style-driven content all work. The article's author reserves the full realistic-human bypass workflow for their private community (reply "ARQ" to the original article).
