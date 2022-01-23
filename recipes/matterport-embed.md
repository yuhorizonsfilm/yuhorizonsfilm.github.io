# Matterport embed on website  

## info  
* How to Embed a matterport tour on a website

## steps  
1. <i f r a m e allow="xr-spatial-tracking" allowfullscreen="" frameborder="0" height="500" src="https://my.matterport.com/show/?m=xxx" width="100%"></ i f r a m e>
2. Login to your Matterport account.
3. Copy the embed code provided.
4. Head to the page you'd like to embed the 3D environment while in edit mode.
5. Paste the embed code using the CMD+V (on Mac) or CTRL+V (on Windows) shortcut.
6. Click "Save" and view live to see your Matterport 3D environment live.
7. Adding URL Parameters:
8. Looped Guided Tour:  &lp=1
9. Auto-Start Guided Tour: &ts=x after the Model ID, where x is the number of seconds after the initial fly-in before a guided tour automatically starts eg. 5
10. Auto-Load:  &play=1
11. Disable Scroll Wheel: &wh=0
12. 

## notes  
*  Responsive Sizing
*  <style>
* .matterport-showcase { position: relative; padding-bottom: 56.25%;
* height: 0; overflow: hidden; }
* .matterport-showcase iframe { position: absolute; top: 0; left: 0;
* width: 100%; height: 100%; }
* </style>
* <div class=’matterport-showcase’>
*  <iframe width=”853” height=”480”
* src=”https://my.matterport.com/show/? m=xxxxxxxxxxx” frameborder=”0”
* allowfullscreen></iframe>
* </div>

## based on  
*  https://static.matterport.com/mp_cms/media/filer_public/ae/67/ae67aa2e-f1fb-4c93-804c-184e8ebcb8d6/matterport_embedding_guidelines_3.pdf

