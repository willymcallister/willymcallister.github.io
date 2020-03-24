---
layout: article
title:  "Staticman at Heroku"
author: Willy McAllister
comments: true
---


----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Attempt at v3

Get a Personal Access Token for bot account
Log in to github as willymcallister1+staticmanbot@gmail.com
Settings:Developer:Personal Access Tokens
Set scopes: repo, user (or all of them)
Personal access token:
8a47c707f8365d2408b83984359da8f180f3f70c

Generate ssh key for heroku-to-github communication:
ssh-keygen -m PEM -t rsa -b 4096 -f ~/.ssh/staticman_key

Set config variables at Heroku:
heroku config:add --app spinningnumbers-staticmandev "RSA_PRIVATE_KEY=$(cat ~/.ssh/staticman_key | tr -d '\n')"
heroku config:add --app spinningnumbers-staticmandev "GITHUB_TOKEN=8a47c707f8365d2408b83984359da8f180f3f70c"

ssh-keygen -m PEM -t rsa -b 4096 -C "staticman key" -f ~/.ssh/staticman_key
heroku config:add --app ${bridge_app_name} "RSA_PRIVATE_KEY=$(cat ~/.ssh/staticman_key | tr -d '\n')"
heroku config:add --app ${bridge_app_name} "GITHUB_TOKEN=${github_token}"


staticmanUrl for v2: https://spinningnumbers-staticmandev.herokuapp.com/v2/entry/willymcallister/willymcallister.github.io/master/comments
staticmanUrl for v3: https://spinningnumbers-staticmandev.herokuapp.com/v3/entry/github/willymcallister/willymcallister.github.io/master/comments

Accept invitation for staticmanbot to be collaborator.
NOT NEEDED:  
  XX https://${bridge_app_name}.herokuapp.com/v2/connect/${github-username}/${blog-repo}
  XX https://spinningnumbers-staticmandev.herokuapp.com/v3/connect/github/willymcallister/willymcallister.github.io
Instead, log in to github as willymcallister1+staticmanbot@gmail.com and click on Accept Invitation.


Recaptcha - encrypt Recaptcha **SECRET** siteKey
My recaptcha site key:     siteKey: "6LcK3xkUAAAAAKdppIIORt78Df93D2qvOGtZinEy"
My recaptcha secret key: 6LcK3xkUAAAAAIDeW7iYQaLgLJbTahBwWl6wlzIZ

https://${bridge_app_name}.herokuapp.com/v2/encrypt/{$recaptcha-site-secret}
https://spinningnumbers-staticmandev.herokuapp.com/v3/encrypt/6LcK3xkUAAAAAIDeW7iYQaLgLJbTahBwWl6wlzIZ

XXX XQ/rrrBv4ejks8vjcdcjffukZoOC30fMuX0F7QVlE2iKp6irA5QFl8lN5UQjzG41stle2JgzU8AMv40aaGdH0S9A4OpUxJTjCEQpHPtKsWOIyncB0rV7ztWoA+88dt9ywmF9hk8AuKxSxNrf1YHJ73hesMeCsFmZE3CCeAozRce6Oaox1kZ+tYu5R0Kx+2zu0GARFrwz4pzVanwPKAwn6m7P4BRN+QJcQtCQjuFRd3T9XyWmm0JzEqnrTa5XczkCjsXU7SgoEZPKyuG3ercW87t1fgUPGydJrSS9rsKEyy3RJfqZZC8LT63uATM4M/CAdVrP7gjZMI3VkwPY/WB/ikEhcSgl9ONe1b1ySWE6YCbEAxfbChmBqNGdLeZRXoQQHEfFgDtrkn2QC/UlyXuy9x7XAsM0mbJqyERSJdmnAM3RLXUjc7o4LNfsmbcZFLxduqyLmNDW1LUbWA12Q/Am/CC1BRqhZlaHoa9Ep90KX+EivOlxZk5/WyTVFbeczFeKz64Eu53yosxrgc6GrEFZOlJCCYYeXnBbElU7P144KGSstO1ahbwPBD1VzPpJNRysq4yzJFOL3DPfPdi2E1GnPmHy/5Jb+pBRMxi5S46yyXTpD0pD183GU6npoRNsDnJt03Yb2zkURpaMjpYkrimE7USGuGgrx4wauX1XNxQ+6tA=

Recaptcha can be enabled/disabled in staticman.yml.

Useful Heroku commands:
Show logs
heroku logs --app spinningnumbers-staticmandev

View app configuration
heroku config --app spinningnumbers-staticmandev

Robot login at GitHub
willymcallister1+staticmanbot@gmail.com

## Staticman v2 at Heroku

### Github bot account

Create a new account at github to act as your Staticman robot for handling comments. This is just an ordinary user account. It will ask you for a unique email address. My bot is named willymcallisterbot. The bot's email address is `willymcallister1+staticmanbot@gmail.com`.

>Here's a trick if you have gmail: You can make an unlimited number of new email accounts by appending + after your gmail username, and then any string. For example, if willymcallister1@gmail.com is your email then   
willymcallister1+staticmanbot@gmail.com counts as a totally different email as far as github is concerned.

The bot doesn't have any repositories. It just has a personal access token for the Heroku app to use.

### Personal access token

Request a _personal access token_ from GitHub for the bot account. This acts as a password when the bot sends PR's to your web site's repository.

* Log in to GitHub as your bot, `willymcallister1+staticmanbot@gmail.com`  
* Settings (upper right): Developer: Personal Access Tokens  
* Request a token
* Set scope to: repo, user (or all of them)
* Willy's personal access token:  `8a47c707f8365d2408b83984359da8f180f3f70c`

### reCaptcha v2

Go to [reCAPTCHA](https://developers.google.com/recaptcha) and sign up your web site. I use the “v2 Checkbox” variant.

You get two reCaptcha keys, _site_ and _secret_. Both keys are 40 characters.  
My reCaptcha site key: `siteKey: "6LcK3xkUAAAAAKdppIIORt78Df93D2qvOGtZinEy"`  (goes in _config.yml and staticman.yml)  
My reCaptcha secret key: `6LcK3xkUAAAAAIDeW7iYQaLgLJbTahBwWl6wlzIZ` (will be encrypted below, and added to _config.yml and staticman.yml)

### Heroku account

Set up a free account at [Heroku](heroku.com). 

Install the [Heroku command line interface (CLI)](https://devcenter.heroku.com/articles/heroku-cli) on your computer. When you log in to the Heroku CLI you can issue various heroku commands from a terminal window on your computer.

### Deploy a private instance of the Staticman API bridge to Heroku

Visit [Staticman at github](https://github.com/eduardoboucas/staticman). Switch to the desired branch---pick either `master` or `dev`.

Use the Deploy button on the Staticman README page. This deploys the Staticman app to Heroku.

My Staticman application at Heroku is called https://git.heroku.com/spinningnumbers-staticmandev2.git.

### SSH key

Generate an ssh key for heroku-to-github communication,

`ssh-keygen -m PEM -t rsa -b 4096 -C "staticman key" -f ~/.ssh/staticman_key`

This produces two files in folder ~/.ssh, 
{% capture summary %}ssh staticman_key (big, with line feeds){% endcapture %}
{% capture details %}
-----BEGIN RSA PRIVATE KEY-----
`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`
-----END RSA PRIVATE KEY-----
{% endcapture %}{% include details.html %}
{% capture summary %}ssh staticman_key.pub (small){% endcapture %}
{% capture details %}
`ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCd8clmPBZRk+LROrCdAOtjecKaJcBN79IWb9RofK6lgYp9BDCxNHhw0S0CAxLVENsAu6xuOaw1kWBVeZfHfMS73Qq4c/KnCyymFY+mx7KJRkQ+awYau55TOgbhIeknf4e9kJ4cXjOUC9EZUV/NQ4jC4tDlri2LkEPSRWy/FCTIk61mpEs8Useebgsb0yd9/x1Lh2BM3AniASqs2NLNZHzmgDYPr4KYshKVUVHDbUzDWxllxsvMhjnjOttzkyK0O3HVgxHpFGEP/gkuNhwbRKCcpY9ytlrkc7Gv5P4gdNlzvyowyZyy7UvzZCjoV4MABOrdIwTR6m0R34nMlNSwlLgrWS44p2BXw87BweQV0akWllDmxcqWfShcM+d/jBMPheNZ5VwxKv0FkcDJoO28apX9JQ5vwlgFo6tBwgKlT1/fGnrJ83r7m/j4L1GZIGKCglvl5DhoOwBhBIY7nsyoSupMeEY9HtAxGUHGieJl4+UFaObaf9+kwljs83UHnBo1X7mqTPs4POczBZstX2sRYCYE6tAGh/ubi1TdJ3cnpFCPn5gRntIJJLWnT5u9MvvHuc5Shl+2RQsD3+H29rr4PokbcWNaF2FATLn5punVkeu/tP4w0OwwKB/lnIV2iQ3002hVNaYzFWVCtOhQloy3ojhvB424Qk1d5XKeR9zpjHws1w== willymcallister@Willy2-MPB.local`
{% endcapture %}{% include details.html %}

### Set configuration variables at Heroku

In a terminal window issue these three heroku commands to set configuration variables,

ssh private key (with \\n line feeds removed),  
`heroku config:add --app spinningnumbers-staticmandev2 "RSA_PRIVATE_KEY=$(cat ~/.ssh/staticman_key | tr -d '\n')"`  

Personal access token,  
`heroku config:add --app spinningnumbers-staticmandev2 "GITHUB_TOKEN=8a47c707f8365d2408b83984359da8f180f3f70c"`  

Your [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List),  
`heroku config:add --app spinningnumbers-staticmandev2 "TZ=America/Los_Angeles"`

Check that it worked,  
`heroku config --app spinningnumbers-staticmandev2`  

Go to Heroku. Click on Open App in the upper right. The response should be,

Hello from Staticman version 3.0.0!

>What's happening,  
The ssh key is used when you send something to Staticman's /encrypt endpoint.  
The personal token acts as a password when the Heroku app sends a Pull Request to your site. It allows the Heroku app to present itself as the bot.  
Setting the TZ makes Heroku logs easier to read. 

### Encrypt reCaptcha secret key

Encrypt the reCaptcha SECRET site key (not the SITE key) using your Staticman app at heroku. Put this url into a browser,  

General form,  
`https://${bridge_app_name}.herokuapp.com/v2/encrypt/{$recaptcha-site-secret}`

My version,     
`https://spinningnumbers-staticmandev2.herokuapp.com/v2/encrypt/6LcK3xkUAAAAAIDeW7iYQaLgLJbTahBwWl6wlzIZ`

The Encrypted reCaptcha secret key appears in the browser. Save it.   
{% capture summary %}reCaptcha Encrypted secret key (single long line){% endcapture %}
{% capture details %}
`TFSBPnpkddM1YiDlSMnL6xeL46XTXTga6c6KVB009M3Eg11Jj5U00maPhlhZCl6zOM7a9CMeEnEsw6vrBEVVBvyDAdYt4Rnk3De1AWusSbLMlzGSZ9SIrHqUQjI1augxahQLwv+AILzRoFDl6LsPRrCNS71jG69xtFz4RyAv9Z9jurPlalAk5CxP5HxH8SRdpBwp6a+xes06Kxk41d27QHG1UEFHUpl0p7q/vh93TWjMdWQnWFJUL+GllriZwuO1FGXAqjV7NDRMY+9C7h3FyQNXldG8thrJVPBmf43FidYSze2yDUN1bwPGH2NyoIuVliMLjBjTyDBRODsDehJZaXlITjTJc3LbuPxKTRRFW7CumO10ciCFGSvk5VnaJjz2MzdlME2yQ/BP7U7qIeh6YkIzzGM+cJbWPASx2tBCDnO9rEFxZFBnUnJHYafdkrlI3/mIo+OpuJojMauLFrc9ed5SFq41BMuoLU37wEtMlY8cz8veqhGhGcKiDnBiJT1EFfZaBRlCROpL+uXoJNTvTV5b1APDySNQoLWJNcu9ALrURrg/GK5hqxXOeREk5KOXzLVEYPbSd2ZLKzgOAp/6H9SXF+GZ8aqYJxmihhjS9mjzXluismsirLw3VWag3u6uS6QSIGCtPVJ95pZ4hrzip+9PJb8fyT8iUKU57ptujg8=`
{% endcapture %}{% include details.html %} 

Put this Encrypted reCaptcha secret key in both _config.yml and staticman.yml as the reCaptcha.secret: field, encased in double quotes.

>What's happening: This encrypted reCaptcha key is not remembered by Staticman. The encrypted reCaptcha key is sent to Staticman in staticman.yml with each new comment. Staticman decrypts the encrypted reCaptcha secret key to recover the reCaptcha secret key. It then uses the reCaptcha secret key to verify reCaptcha was done properly. 

Questions:  
1. Please confirm my understanding: Does Staticman encrypt my reCaptcha secret key using the ssl staticman_key saved as a configuration variable at Heroku?  
2. What is the role of staticman_key.pub? Travis says: "The secrets will be encrypted with the **public half** of the key pair, and decrypted in the Bridge API server with the private part." I don't see the public half being used anywhere.
3. With my new ssl key, do I also need to get a fresh encryption of my MailGun api key and MailGun domain? (in staticman.yml)
4. Travis's page: Instructions for encrypting the reCaptcha secret key are given before the instruction to generate the ssh key and send it to Heroku. Should the reCaptcha encrypt instruction come after?

### Staticman URL
Add your Staticman URL to _config.yml and staticman.yml.

General form,  
`staticman_url: https://${bridge_app_name}.herokuapp.com/v2/entry/${github-username}/${blog-repo}/master/comments`

My version,  
`staticman_url: https://spinningnumbers-staticman2.herokuapp.com/v2/entry/willymcallister/willymcallister.github.io/master/comments`

(My site is saved in the master branch.)

### Send an invitation to the bot to become a collaborator

Log in as yourself to your site repository. Go to Settings: Manage Access. Search for and add your GitHub bot account as a collaborator. Click on Add Collaborator. 

Log in to GitHub as the bot, willymcallister1+staticmanbot@gmail.com, and click on Accept Invitation.

Or, you can accept the invitation by opening the email sent to you by GitHub and following the link.

Or, you can use the method from when Staticman was a public server. Put this URL into a browser,  

General form,  
`https://api.staticman.net/v2/connect/{your GitHub username}/{your repository name}`

My form,  
`https://spinningnumbers-staticman2.herokuapp.com/v2/connect/willymcallister/willymcallister.github.io`

This should return `OK!`` (one time) if it worked.

Once the bot is a collaborator it can submit Pull Requests to your site repository.

## Mailgun

Does anything need to happen to the Mailgun keys in staticman.yml? Do I need to encrypt again?

### Try it out

Push everything to your site at GitHub. Then try to submit a comment. Look at the Heroku log to see how things went,

`heroku logs --app spinningnumbers-staticmandev2`

You can see details of any errors in your browser. Open the inspector and look for red errors. Open any underlying objects to see what Staticman/Heroku sent back to you when the comment_form was submitted.

## Troubleshooting tips

#### status=404  

Check the Staticman url.

`https://spinningnumbers-staticman2.herokuapp.com/entry/willymcallister/willymcallister.github.io/master/comments`  
was missing /v2/, should have been,  
`https://spinningnumbers-staticman2.herokuapp.com/v2/entry/willymcallister/willymcallister.github.io/master/comments`

#### status=500 

Log file shows,  
`2020-03-23T12:51:07.577668+00:00 heroku[router]: at=info method=POST path="/v2/entry/willymcallister/willymcallister.github.io/master/comments" host=spinningnumbers-staticmandev2.herokuapp.com request_id=483c4f17-177d-4ae4-9979-f83221a7d40e fwd="5.188.210.39" dyno=web.1 connect=1ms service=452ms status=500 bytes=469 protocol=https`

If the error message on the Chrome console reads 
rawError: "Error: Error during decryption (probably incorrect key). Original error: Error: Incorrect data or key"
Make sure the reCaptcha SECRET key is what you encrypted, not the SITE key. 

insert images.