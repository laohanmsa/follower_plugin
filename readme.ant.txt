LOFTER 粉丝管理 1.O
1. 功能大体描述
    A. 在LOFTER的页面中， 用快捷键加入关注当前可关注的人 （SHIFT+ A )
    B. 在LOFTER的页面中，用快捷键解除关注当前可以解除的人 （SHIFT + F)
    C. 在浏览器里储存（或者在server端）保存已经关注过的人
    D. 在浏览器（或者SERVER端）保存关注过我的人
    E. 优先添加不在 C，D 中的人。

 2. 技术储备
   -1. only load extension when in lofter website . -- TODO

    0. use background page receiving message from content script
       1. add a background page to browser -- DONE
          http://developer.chrome.com/extensions/background_pages.html
       2. implement data saving and loading API
          http://developer.chrome.com/extensions/storage.html

    1. inject content script into lofter pages
       1. inject script into lofter page (content script)
       2. test content script shortcut key binding
       3. invoke click event in content script to trigger fans adding and removing
       4. send massage to background pages
       5. implementing saving and loading list

