/*
(c) Copyright Weborama SA - France. All rights reserved.
It is illegal to modify, disassemble, sell, copy or publish this software
or any part thereof. The use of this software is only permitted with the
prior and express written permission of Weborama SA - France.
More information: http://www.weborama.com/contacts/
*/
function x17() {
    var x1cl, x1ey = x1bb.x1cj();
    x1ey.x1ie = x1bb.x1nn(x1ey.x1ie,'wuid=&retargeting=&');
    x1ey.x1fN = 'https://cstatic.weborama.fr/advertiser/473/48/348/498/';
    x1ey.x1lp = '652';



    x1ey.conf_oba = false;
    
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'https://secure-ams.adnxs.com/click?3Esao3VU6z_cSxqjdVTrPwAAAOB6VDZA3Esao3VU6z_cSxqjdVTrP1PoV5KWDhkHM4GgxTkm2i6XW8RYAAAAAHaZUwDgDAAA4AwAAAIAAABIu9ID_ikLAAAAAABVU0QARVVSACwB-gAJ1wAAAAABAQQCAQAAAKgAzSTyxAAAAAA./cnd=%21yQp64Qjp8tQHEMj2yh4Y_tMsIAQoioTQ4gIxAAAAAAAAAAA./bn=60728/referrer=https%3A%2F%2Fwww.leboncoin.fr%2Fconsoles_jeux_video%2F1105224043.htm%3Fca%3D12_s/clickenc=https://conforama.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=cl&a.si=473&a.te=13083&a.aap=652&a.agi=53&g.lu=' + (adperfobj.landing_urls[0] || '');


    try{
        adperfobj.imptrackers = new Array(
                
        );

        adperfobj.clicktrackers = (new Array(
                
        ).concat(adperfobj.clicktrackers));

        adperfobj.eventtrackers = (new Array(
                
        ).concat(adperfobj.eventtrackers));
    }catch(scr_e){}



    x1ey.addTrackers(adperfobj);
    x1ey.addClicks(adperfobj);

    x1cl = new x1bb.x1ig();
x1cl.x1c(x1ey, 5253, 'banner_300x250.html', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');
x1cl = new x1bb.x1hW();
x1cl.x1c(x1ey, 5254, 'rabPC300_250.gif', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');




    x1ey.x1gQ();


}
x1L('adperf_core_' + adperf_version + '_scrambled.js');