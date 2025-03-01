---
description: GTA4原版游戏常见BUG
keywords:
  - GTA4原版游戏常见BUG
tags: [杂项]
---

# 2：原版游戏常见BUG:

### **帧数过高引起的Bug**  

- 部分任务无限载入

- 过场动画中的放大镜头推过头卡死  
  可通过安装 [Fusion Fix](https://pan.huang1111.cn/s/9Q2n5Cd?path=%2F) 修改 FOV 解决

- 过场动画中的卷帘门关得太早，人卡在车库门口出不去

- 摩托车转向打滑

- 复仇/交易结局按空格爬不上直升机，暂时将跳跃键改成鼠标左键可破

-  **FPS>=67** 时，交易结局Jacob的直升机飞不出来

- TLAD掰手腕赢不了

- TBoGT喝酒赢不了

锁60帧解决大部分问题，**锁30帧+窗口化解决全部问题**。

可通过专为 GTA 4 制作的 [Fusion Fix](https://pan.huang1111.cn/s/9Q2n5Cd?path=%2F) 修复包中的 `FpsLimit` 和 `CutsceneFpsLimit` 选项，对游戏帧数与过场动画帧数单独进行设置。

通过其他软件临时限制帧数亦可，甚至可以拔了笔记本电源，或是在任务管理器里把游戏设置成单核运行。

### **SNT修改器引起的Bug**

- 无法接听电话， **按下接听后自动挂断**   
  按 `小键盘减号键` 开关一下**睡眠模式**试试，按下后提示`Sleep Mode Disabled`说明关掉了。  
  提示  `Sleep Mode Enabled` 的话，过几秒再按一次减号键，把睡眠模式**关了**。  
  如果用SNT的快捷键**关闭**睡眠模式以后还是接不了电话，就只能**删除修改器**后开新档了。  
  删除根目录下 `Trainer` 开头的几个文件即可删除修改器，搞不清楚就进根目录删除所有游戏文件重下。别用Steam的卸载功能，Mod卸不干净的。  
  删了修改器开了新档，甚至重装了游戏，结果问题还是存在的话，打开 `此电脑\文档\Rockstar Games\GTA IV\Profiles`，里面应该有至少一个由`8位数字/字母`命名的文件夹，打开这个文件夹，删除里面的`ProfileSettings`文件。  

- 一上车游戏就崩溃
  按 `F3` 或 `F4` 呼出SNT菜单，选择 `Options`，移动到右边的倒数第七列，将 `Enable/Disable Ingame Messages` 设为 `Disabled`。
  其实是因为上车时SNT会在屏幕底部显示当前电台名称，但这个功能在完整版里坏了。使用[修复版SNT](https://www.gtainside.com/en/gta4/trainers/161465-simple-native-trainer-for-steam-v1-2-0-43-fixed/)可以解决除个人电台以外的崩溃。

- 调到个人电台游戏就崩溃  
  同上，只能禁用SNT的游戏内提示，或者清空个人电台。

 **SNT修改器和ScriptHook年久失修，虽然能用，但还是会引起很多奇奇怪怪的Bug。** 
有能力的话还是推荐使用相对新一点的 [Liberty's Legacy Trainer](https://gtaforums.com/topic/973091-gta-iv-12043-libertys-legacy-trainer/)。
不过这个修改器没有默认的功能快捷键，只能按 `F11` 呼出菜单以后用方向键和回车选择选项。

### **其他原因的Bug**

- 显存识别错误  
  解决方案已经写在游戏里了。在 `commandline.txt` 或 Steam启动项 中添加一行 `-availablevidmem 2048` 即可 (2048改为实际显存数值)

- 进入游戏后提示 `Social Club初始化失败。错误代码：~1~`  
  解决方案也写在游戏里了。  
  若为代码1，且游戏版本为 **1.2.0.32** ，则需要将系统日期改到20年5月之前或升级游戏。  
  若为代码4，[关于steam正版gta4无法使用enb的解决办法（错误代码4）](https://tieba.baidu.com/p/7879731433)。或者是打个破解补丁绕过RGL。     
  或者卸载重装 **Rorkstar Games Launcher**  和  **Rockstar Social Club** 
  终极解决方法： **进入游戏根目录，删除所有文件，验证完整性重装游戏。**   
  如果以上方案都无法解决，请等待R星更新RGL或游戏。

- 切出游戏窗口，再切回来游戏黑屏卡死  
  解决方案：安装 [Fusion Fix](https://pan.huang1111.cn/s/9Q2n5Cd?path=%2F)，启用无边框窗口化。

- 启动游戏后卡在法律声明界面  
  解决方案：安装 [Fusion Fix](https://pan.huang1111.cn/s/9Q2n5Cd?path=%2F)，启用无边框窗口化。

-  **警车电脑** 中的 **最高通缉** 任务，如果玩家离选择的目标位置较近，警车电脑就会莫名其妙地提示 **"正在上传图片"** ，导致游戏卡死在这一界面。  
   **无解，只能强制退出游戏** 。
