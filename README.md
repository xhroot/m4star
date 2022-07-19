# m4star
m4star.com website

https://m4star.com

## Changing the website

To be able to change the website locally, upload your SSH key to the project settings.

### To pull website locally

```bash
git clone git@github.com:xhroot/m4star.git
cd m4star
```

To view your change, run the webserver locally:

```bash
./host.sh
```

And browse to your https://localhost:8000/site.

### To push to production

```bash
git commit -m "blah"
``` 

and 

```bash
git push
```

Your changes will be pushed to `main` branch and will autodeploy to the webserver host (live immediately).
