const {app, BrowserWindow, screen, net , protocol} = require('electron');
const path = require('path');
const express = require('express');
const fs = require('fs');


const server = express();
const PORT = 3000;
// 将 /assets 路径映射到 wave_drawer/assets 目录
server.use('/assets', express.static(path.join(__dirname, 'assets')));

// 动态匹配所有 .html 请求
server.get(/\.html$/, (req, res) => {
    const filename = req.path.substring(1); // 去除开头的 /
    const filePath = path.join(__dirname, filename);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send('Page not found');
        }
        res.sendFile(filePath);
    });
});

// 根路径默认返回 index.html
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Local server is running at http://localhost:${PORT}`);
});
function createWindow() {
    const win = new BrowserWindow({
        width: 750,
        height: 900,
        icon: path.join(__dirname, 'wave.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            // webSecurity: false
        },
    });
    win.setMenu(null);
    // 加载本地 HTML 文件
    // win.loadFile('index.html');
    win.loadURL(`http://localhost:${PORT}`);
    // win.webContents.openDevTools();
    // ✅ 在这里添加监听器，确保使用的是当前创建的 win
    return win;
}



app.on('web-contents-created', function (event, webContents) {
    //当渲染器使用 window.open 打开子窗口 进行拦截配置
    webContents.setWindowOpenHandler((details) => {
        const {width, height} = screen.getPrimaryDisplay().workAreaSize
        if (details.url) {
            return {
                action: 'allow',//允许新窗口被创建
                overrideBrowserWindowOptions: {//允许自定义创建的窗口参数
                    title: "Help",
                    width: width,
                    height: height,
                    autoHideMenuBar: true,//自动隐藏菜单栏
                    icon: path.join(__dirname, 'wave.png'),// 窗口图标
                    parent: null,//指定父窗口
                    x: 0,
                    y: 0,
                    resizable: true,
                    webPreferences: {//网页功能设置。
                        // preload: path.join(__dirname, 'preload.js'),//在页面运行其他脚本之前预先加载指定的脚本 无论页面是否集成Node, 此脚本都可以访问所有Node API 脚本路径为文件的绝对路径。
                        // webSecurity: false,//禁用同源策略
                        nodeIntegration: true,
                        nodeIntegrationInWorker: true,
                    },
                }

            }
        }
        return {action: 'deny'}//取消创建新窗口
    })
})

app.whenReady().then(() => {
    let win = createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
