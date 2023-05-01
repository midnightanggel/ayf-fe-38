# Asean Youth Forum (AYO) Front End

Dibuat dengan :

- HTML5
- Javascript ES6
- Tailwind CSS

# How To Use Git Properly ( Please Read This SHIT!!!)

### If you new in this project Read the Initial Setup Section

# Contribution Guide

# Please DO NOT Direct PUSH to develop Branch

## Braching Guide

- if you do improve

  > `git checkout -b "improvement/apa-yang-di-improve`

- if you do bugfix

  > `git checkout -b "bugfix/apa-yang-di-fix`

- if you do create a new feature
  > `git checkout -b "feature/fitur-apa-yang-di-buat`

## Commit Message Guide

- if you do improve

  > `git commit -m "improvement: apa yang di improve`

- if you do bugfix

  > `git commit -m "bugfix: apa yang di fix`

- if you do create a new feature
  > `git commit -m "feature: fitur apa yang di buat`

## Conflict Resolve Guide

- 1.Stash dulu kerjaan kamu supaya gak ilang

` git stash`

- 2.1 Setelah itu kamu perlu pull perubahan dari branch main

`git pull origin main`

- 2.2 Setelah kamu berhasil melakukan pembaruan dari branch main selanjutnya kamu perlu mengembalikan pekerjaan mu sebelum nya yang ter stash

`git stash pop`

- 2.3 Lanjutkan Pekerjaan dengan Semestinya

- 3 Tapi jika ketika melakukan step kedua terjadi error conflitc atau karena ketololan kamu, maka ikuti langkah yang bawah

## Conflict Resolve Guide V2

- 1 Pindah dulu ke Branch main

`git checkout main`

- 2 Kemudian pull perubahan terbaru dari branch main

`git pull`

- 3 Kemudian Pindah lagi ke branch dirimu

`git checkout <branch mu>`

- 4 Selanjutnya kita perlu merge perubahan terbaru dari main

`git merge main`

# Please USE yarn not npm

## Recomendation Code Editor

Visual Studio Code

### Recomendation Extension

- Stylelint
- TailwindCSS Intelesense
- Prettier
- Error Lens
- ESLint

## Initial Setup

- Clone Project ini ( Direkomendasikan menggunakan SSH )

> `git clone git@github.com:himatifuninus/himatif`

## Install NodeJS dan Yarn

- Anda perlu menginstall dulu NodeJS dan Yarn ( Direkomendasikan menggunakan NodeJS Versi LTS )

> `npm i -g yarn`

## Install Dependency

- Pasang Dependency

> `yarn install`

## Run Development Server

- Project bisa dijalankan dengan metode berikut

> `yarn dev`

## Build APP

- Project bisa di build dengan command berikut

> `yarn build`

## Run Builded APP

- Project yang sudah di build bisa dijalankan dengan metode berikut

> `yarn preview`

## Development With Nix

Development dengan Nix membuat proses Develop menjadi lebih mudah dan ringkas, semua dependency akan terurus dengan sendirinya, juga independent artinya tidak akan menggangu environment yang lain

- Pasang Nixpkgs

> `sh <(curl -L https://nixos.org/nix/install) --no-daemon`

- Pasang nix-flakes

> `nix-env -iA nixpkgs.nixFlakes`

- Setup nix-flakes \
  Edit file yang ada di `~/.config/nix/nix.conf` atau `/etc/nix/nix.conf` dan tambahkan:

> `experimental-features = nix-command flakes`

- Pasang nix-direnv

> `nix-env -f '<nixpkgs>' -iA nix-direnv`

- Setup nix-direnv

> `source $HOME/.nix-profile/share/nix-direnv/direnvrc`

- Masuk ke folder yang sudah di clone kemudian jalankan perintah berikut

> `direnv allow`

- Dan enjoy tinggal tunggu dependency terinstall dengan sendirinya

## Development with Docker

Docker harus di pasang dulu jika belum ada

- Pasang Docker bisa di unduh di https://docker.com

- Setup Docker

> `docker compose up`

## Setup Env

ENV di sesuaikan seperti yang ada di contoh .env.example

- Rename file .env.example menjadi .env.local
- Isi ENV sesuai dengan yang ada di dalam file .env.local nya

## Setup Husky

Untuk bisa menggunakan husky agar berjalan baik dan benar maka perlu di inisialisasi dulu

- Jalankan perintah
  > `npx husky-init`

## Demo App

- [Development Build](https://himatif-revamp.netlify.app/)
