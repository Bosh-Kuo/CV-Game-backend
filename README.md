# wp1101-final project: Computer Vision Game Playground
## Description
This program is a computer vision web-games website. All three games conbined with **webcam** and **computer vision technology**. We have developed 3 games, namely `Pose Flappy Bird, Finger Exercise, and Rock-Paper-Scissors`.

![Loby](./pic/Loby.png)

![SignIn](./pic/SignIn.png)

- Frontend repo : https://github.com/Bosh-Kuo/CV-Game-frontend  
- Backend repo : https://github.com/Bosh-Kuo/CV-Game-backend

<br>

## **Demo** : 

If you are interesting to this project, just watch this **[demo video](https://youtu.be/nbhNhcm_cP8)** ! 


<br>


## Installation

- Clone this repo first

- Install frontend & backend packages

yarn

```shell
# in './CV-Game-backend'
yarn

# in './CV-Game-frontend'
yarn
```

npm

```shell
# in './CV-Game-backend'
npm inatll

# in './CV-Game-frontend'
npm install
```

## Run in localhost

1. Open two terminal windows
2. Go to './Playground/backend' and copy the `.env.defaults` file to `.env` file
3. Fill in the MONGO_URL in the `.env` file with your [MongoDB](https://www.mongodb.com) url and set SALT_ROUNDS

```
#.env
MONGO_URL= (your mongo url)
SALT_ROUNDS= (you can set SALT_ROUNDS=10)
```

4. Go to './CV-Game-backend'
5. In one window run this script to start your backend

```
yarn dev
```

or

```
npm run dev
```
6. Go to './CV-Game-frontend'
7. In the other window run this script to start your frontend

```
yarn start
```

or

```
npm start
```

8. Make sure your backend connect to your [MongoDB](https://www.mongodb.com)
9. Open http://localhost:3000 with your browser and you should be able to start plaing our games!

## Test

- Sign Up / Sign In 功能正常
- 可正常從 Lobby 進入各個遊戲
- 可正常從左側 DashBoard 進入遊戲以及 LeaderBoard
- 各個遊戲可以合理的判斷手勢與姿勢
- 分數與時間計算無誤且反應於 LeaderBoard

## Teamwork

郭柏志：

- 前端整體畫面 Layout 的 UI/UX 設計
- Sign In, Sign Up Page 功能與畫面設計
- Game Page 架構與畫面設計
- Pose Flappy Bird Game 遊戲開發
- 各頁面的 Routes 安排與 path 處理

費聿暄:

- Finger Exercise 遊戲開發
- 後端 graphql 開發與 mongodb 串連
- 成果部署

蔡予謙:

- Rock-Paper-Scissores Game 遊戲開發




## Reference

- [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html)
- [andypotato/fingerpse](https://github.com/andypotato/fingerpose)
- [material-ui templates](https://mui.com/zh/getting-started/templates/)
- [簡易版flappybird](https://github.com/Lucifier129/flappy-bird)
- [Pose Detection tutorial repo](https://github.com/nicknochnack/PosenetRealtime)
- [Pose Detection deep learning model](https://github.com/....../tree/master/pose-detection)
- [Rock Paper Scissors Game](https://github.com/andypotato/rock-paper-scissors)
- [Fingerpose Libary](https://github.com/andypotato/fingerpose)
