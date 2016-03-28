# turbomorph

**Note:** This is an experiment, use at your own risk.

Monkey patches turbolinks to morph your DOM between two different pages rather than just subbing out the body.

## Why?

Mainly so that when you change classes on things with transitions you get lovely animations as you move from page to page.

## Usage

Add to your gemfile:

```
gem 'turbomorph'
```

Install:

```
bundle
```

Add to your application.js *after* requiring turbolinks:

```
//= require turbolinks
//= require turbomorph
```
