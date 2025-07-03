---
title: "My Neovim Journey (so far...)"
description: "My experience with Neovim and why I started in the first place"
date: "2023-10-23"
tags: ["neovim", "vim", "vim-plugins", "vim-shortcuts"]
---

# My Neovim Journey (so far...)

### Why Neovim?

A lot of the reasoning for wanting to try out Neovim actually came from watching some Twitch streamers (mostly ThePrimeagen) and being in awe at how fast they move around files and change code.

ThePrimeagen loves to show off his vim skills, but he also is a great teacher, and luckily for me he has a playlist on a great start to vim [here](https://www.youtube.com/watch?v=X6AR2RMB5tE&list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R). This started a very slippery slope into the world of Neovim!

### LazyVim

To start my Neovim journey, I thought I'd start with a pre-configured setup - this was because I had no idea what I was doing and I just wanted something to work! Later I decided to go down the custom route, but I'll get to that in the next paragraph.

My experience with LazyVim was pretty good in all honesty and loved how out of the box it felt. The main issue I had is whenever I wanted to tweak something, I had to go digging deep into the depths of the LazyVim GitHub repo to find out where it was initially set. The `~/.config/nvim` folder didn't contain all of the LazyVim code, so there was "hidden magic" I wasn't comfortable with.

### The Jump To A Custom Config

When I decided that I wanted a custom config, I had seen a very highly recommended starter config: [Kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim). And I absolutely agree with everyone on this - it is a fantastic way to get into a custom configuration, it is simple with a lot of must have plugins (lsp, treesitter, telescope, etc.). Every bit of code is commented so you know exactly what it does, and it provides instructions on how to extend the config.

From here I took the things I liked about LazyVim and brought them to my own config, mostly keybindings. But I also simplified some keybinds such as opening telescope, LazyVim uses `<leader>ff`, but I had no need for other telescope options so I simplified this to `<leader>f`. Same with the tree explorer, I just use `<leader>e` for simplicity.

### Conclusion

I write 99% Typescript code at the moment, which is a lovely experience in Neovim. Occasionally I write in C# or F#, and this is when it gets a bit messier... Sometimes the LSP doesn't work correctly, or sometimes it kinda works and kinda doesn't, like when I try to Go To Definition, it does nothing, or errors. I may write another blog post about this in the future.

I absolutely LOVE the fact that I have an IDE that is specific to me, everything in the editor is there because I want it. I can write code faster due to vim shortcuts, and it has given me an appreciation for CLI tools, as I use everything in a terminal now.

Would I recommend it to anyone that's curious? Absolutely! I would say either check out a pre-configured option such as LazyVim, or a better option might be downloading the vim extension for whatever editor you're currently using, and getting used to the vim keybindings.

If anyone's interested, you can find my config [here](https://github.com/nathanjcollins/nvim-config).
