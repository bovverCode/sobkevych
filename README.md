Build the image
```bash
docker build -t next-app .
```

Check whether the image is built
```bash
docker images
```

Run the container
```bash
docker run -d --name next-app -p 3000:3000 next-app
```

Rebuild
```bash
docker stop next-app
docker rm next-app
docker build -t next-app .
```

To run without docker
```bash
npm i
npm run dev
```