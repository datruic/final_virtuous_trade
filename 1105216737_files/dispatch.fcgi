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
    x1ey.x1fN = 'https://cstatic.weborama.fr/advertiser/786/15/106/218/';
    x1ey.x1lp = '409';



    x1ey.conf_oba = false;
    
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'https://adserver.adtech.de/adlink/1282/6270345/0/170/AdId=17174892;BnId=1;itime=263430916;kvp36=p36-07rrv2gv6l3yozbz;kva=p-kgyqycag6kebf;kr1478=3845123;kvc=1024624;kvi=4839941636083066632;kr751=3865863;kvl=309223;kvs=300x250;kp=801688;link=http://exch.quantserve.com/r?a=p-KGyQYCAg6Kebf;labels=_qc.clk,_click.adserver.rtb,_click.rand.53304;rtbip=91.228.73.45;rtbdata2=EAUaD0ZSX0JJTkNLX01hcnMxNyCHvR8o5-8SMPDEPjoYaHR0cHM6Ly93d3cubGVib25jb2luLmZyWihMVDNUbG4wNjFaQTFQdFBIZWpLYngzbzUwSkkxYTlPUUxUelVGSjJ0dQOmEECAAercj6ECoAEBqAHU9aQDugEVMzM3NjA1MjkwMDIzODIyOTgxMTowwAG0qirIAZ2ckvirK9oBEzQ4Mzk5NDE2MzYwODMwNjY2MzLlAfyr1TzoAWSYAoWzFagCBqgCBbACCLoCBFvkSS3AAgLIAgDQAs7hhvv4n_fMqQHgAgE;redirect=https://binck.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=cl&a.si=786&a.te=268&a.aap=409&a.agi=4&g.lu=' + (adperfobj.landing_urls[0] || '');


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
x1cl.x1c(x1ey, 1538, '300x250.html', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');




    x1ey.x1gQ();


}
x1L('adperf_core_' + adperf_version + '_scrambled.js');