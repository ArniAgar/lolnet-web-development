/* GLOBAL VALUES */
$extlinks = $('.mainnavbar_is_static #mainnavbarcenter').html();
$intlinks = $('.mainnavbar #mainnavbarcenter').html();
mbl_menu_html_inserted = false;
width_state_achieved = 'large';
loggedin = 'false';
$notifications_head = [
    'What is done',
    '',
    '',
    '',
    'New Website',
    'Christmas Event'
];
$notifications_body = [
    'About Us',
    'Donate',
    'Home',
    'Servers - In Progress - Need server web API',
    'A new website is being rolled out.. stay tuned for more info',
    'As its going to be christmas, eventually, we will do a christmas special event :D'
];
showcase_serverlist = [
    'LolnetLobby',
    'Building'
];
serverlist = [
    '1.7 BC',
    'AS2',
    'Building',
    'Creative Plot',
    'Direwolf20',
    'Factions',
    'Hunger Games',
    'Huxley',
    'Infinity',
    'Lobby2',
    'LolnetLobby',
    'MobArena',
    'Mumble',
    'Resurrection',
    'Skyblock',
    'skyfactory',
    'SkyWars',
    'Survival',
    'TolkienCraft',
    'TolkienCraftDev',
    'Tyla',
    'UAServer',
    'VotingMF',
    'VotingVanilla'   
]
$notification_number = $notifications_body.length;
/* END GLOBAL VALUES */
function serverstatusfiller(ele) {
    ele.src = '../img/FullServers.png';
}
function serverinfocleaner() {
    window.setTimeout(function(){
        //------------------------------------------------//
        //                  ALL SERVERS                   //
        //------------------------------------------------//
        var divarray = document.getElementById('server_container').childNodes;
        for (i=0;i<serverlist.length;i++) {
            var textnode = divarray[i].innerHTML;
            var textnode = textnode.replace(/\s/g, '');
            var textnode = textnode.replace('Serveronline', ' Serveronline');
            var textnode = textnode.replace('Players', ' Players');
            var textnode = textnode.replace('Total', ' Total');
            var textnode_tostring = textnode.split(/\s/g);
                //   [0] = ServerName
                //   [1] = Serveronline
                //   [2] = Players
                //   [3] = Total
            divarray[i].innerHTML = textnode;
            var textnode_tostring0 = textnode_tostring[0].replace('ServerName=', '');
            var textnode_tostring1 = textnode_tostring[1].replace('Serveronline=', '');
            var textnode_tostring1 = textnode_tostring1.replace('true', 'online');
            var textnode_tostring1 = textnode_tostring1.replace('false', 'offline');
            var textnode_tostring2 = textnode_tostring[2].replace('Players=', '');
            var textnode_tostring3 = textnode_tostring[3].replace('Total=', '');
            $('div#server_container > div:eq('+i+')').html(
                '<h1>' + serverlist[i] + '</h1>' +
                '<span class="Total">Players: ' + textnode_tostring3 + '</span>' +
                '<span class="Serveronline">' + textnode_tostring1 + '</span>'
            );
        }
        window.setTimeout(function(){
            //------------------------------------------------//
            //                  FEATURED SERVERS              //
            //------------------------------------------------//
            var divarray = document.getElementById('showcase_inner').childNodes;
            for (i=0;i<showcase_serverlist.length;i++) {
                var textnode = divarray[i].innerHTML;
                var textnode = textnode.replace(/\s/g, '');
                var textnode = textnode.replace('Serveronline', ' Serveronline');
                var textnode = textnode.replace('Players', ' Players');
                var textnode = textnode.replace('Total', ' Total');
                var textnode_tostring = textnode.split(/\s/g);
                    //   [0] = ServerName
                    //   [1] = Serveronline
                    //   [2] = Players
                    //   [3] = Total
                divarray[i].innerHTML = textnode;
                var textnode_tostring0 = textnode_tostring[0].replace('ServerName=', '');
                var textnode_tostring1 = textnode_tostring[1].replace('Serveronline=', '');
                var textnode_tostring1 = textnode_tostring1.replace('true', 'online');
                var textnode_tostring1 = textnode_tostring1.replace('false', 'offline');
                var textnode_tostring2 = textnode_tostring[2].replace('Players=', '');
                var textnode_tostring3 = textnode_tostring[3].replace('Total=', '');
                $('#showcase_inner > div:eq('+i+')').html(
                    '<span class="Serveronline">' + textnode_tostring1 + '</span>' +
                    '<h1>' + serverlist[i] + '</h1>' +
                    '<span class="Total">Players: ' + textnode_tostring3 + '</span>'
                );
            }
        }, 10);
        window.setTimeout(function(){
            $('span.Serveronline:contains("online")').addClass('server_online');
            $('span.Serveronline:contains("offline")').addClass('server_offline');
        }, 600);
    }, 500);
}
function serverloader() {
    for (i=0;i<showcase_serverlist.length;i++) {
        var showcase_server_list = showcase_serverlist[i].replace(/[\. ,:-]+/g, "");
        var showcase_URIserver_list = showcase_serverlist[i].replace(/ /g, "%20");
        var showcase_import_URI = '../servers/' + showcase_URIserver_list + '.txt';
        $('#showcase_inner > div:eq('+i+')').load(showcase_import_URI);
    }
    for (i=0;i<serverlist.length;i++) {
        var server_list = serverlist[i].replace(/[\. ,:-]+/g, "");
        var URIserver_list = serverlist[i].replace(/ /g, "%20");
        var import_URI = '../servers/' + URIserver_list + '.txt';
        $('div#server_container > div:eq('+i+')').load(import_URI);
        //console.log($('div#server_container > div:eq('+i+')').load(import_URI));
    }
    serverinfocleaner();
}
$(function(){
    for (i=0;i<showcase_serverlist.length;i++) {
        var showcase_server_list = showcase_serverlist[i].replace(/[\. ,:-]+/g, "");
        var showcase_URIserver_list = showcase_serverlist[i].replace(/ /g, "%20");
        var showcase_$html = $('#showcase_inner').html();
        var showcase_import_URI = '../servers/' + showcase_URIserver_list + '.txt';
        $('#showcase_inner').html(showcase_$html + '<div class="' + showcase_server_list + '"></div>');
    }
    for (i=0;i<serverlist.length;i++) {
        var server_list = serverlist[i].replace(/[\. ,:-]+/g, "");
        var URIserver_list = serverlist[i].replace(/ /g, "%20");
        var $html = $('#server_container').html();
        var import_URI = '../servers/' + URIserver_list + '.txt';
        $('#server_container').html($html + '<div class="' + server_list + '"></div>');
    }
    serverloader();
});
$(document).ready(function () {
    var $mainnavbar_is_static = $('.mainnavbar_is_static'), $mainnavbar_is_staticHTML = $('.mainnavbar_is_static').html();
    if (loggedin === 'true') {
        $('.mainnavbar_is_static').html($mainnavbar_is_staticHTML + '<a href="https://www.lolnet.co.nz/ucp.php?mode=logout"><button class="logout">Logout</button></a><a href="https://www.lolnet.co.nz/ucp.php"><button class="profile">Profile</button></a><a><button onclick="menu_notification()" class="notifications_desktop">' + $notification_number + '</button></a>');
    } else if (loggedin === 'false') {
        $('.mainnavbar_is_static').html($mainnavbar_is_staticHTML + '<a href="https://www.lolnet.co.nz/ucp.php?mode=login"><button class="login">Login</button></a><a href="https://www.lolnet.co.nz/ucp.php?mode=register"><button class="signup">Signup</button></a>');
    } else {
        window.alert('error - unknown login state');
    }
});
$(document).ready(function () {
    for (i=0;i<document.getElementsByTagName('a').length;i++) {
        //removes ajax requests from jquery mobile
        document.getElementsByTagName('a')[i].setAttribute('data-ajax', 'false');
    }
    //Navbar fixing
    var menu = $('.mainnavbar'), origOffsetY = menu.offset().top;
    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.mainnavbar').addClass('sticky');
            $('.mainnavbar_is_static button').addClass('mainbar_static_button_is_sticky');
            $('.mainnavbarfiller').addClass('sticky-padding');
            if (document.getElementById('mbl_css')) {
            } else {
                $('.notifications_menu').addClass('notifications_is_sticky');
                $('.img_bubble').addClass('notifications_bubble_is_sticky');
            }
        } else {
            $('.mainnavbar').removeClass('sticky');
            $('.mainnavbar_is_static button').removeClass('mainbar_static_button_is_sticky');
            $('.mainnavbarfiller').removeClass('sticky-padding');
            if (document.getElementById('mbl_css')) {
            } else {
                $('.notifications_menu').removeClass('notifications_is_sticky');
                $('.img_bubble').removeClass('notifications_bubble_is_sticky');
            }
        }
    }
    document.onscroll = scroll;
    // Magic Line
    var $el, leftPos, newWidth, $mainNav = $(".mainnavbar");
    $mainNav.append("<div id='magic-line'></div>");
    var $magicLine = $("#magic-line");
    $magicLine
        .width($(".current_page_item").width() + 20)//the '20' comes from the padding of the element
        .css("left", $(".current_page_item").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
    $(".mainnavbar div a div").hover(function () {
        var $window = $(window);
        var windowsize = $window.width();
        $el = $(this);
        leftPos = $el.position().left;
        leftPosPercent = (leftPos / windowsize) * 100;
        newWidth = $el.width() + 20;
        $magicLine.stop().animate({
            left: leftPosPercent + '%',
            width: newWidth
        });
    }, function () {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    });
    //blockquotes
    var bq = $('blockquote');
    var bqtxt = bq.text();
    bq.html('<span class="quote"></span><span class="text">' + bqtxt + '</span>');
    //Header slider
    var pa = document.getElementsByClassName('slider')[0].children, i = 0, b = null, pal = pa.length;
    window.setInterval(function () {
        if (i === 0) {
            b = pal - 1;
            pa[b].style.width = '';
            pa[i].style.width = '100%';
            i = i + 1;
        } else if (i === pal) {
            b = pal - 1;
            i = 0;
        } else {
            b = i - 1;
            pa[b].style.width = '';
            pa[i].style.width = '100%';
            i = i + 1;
        }
    }, 4000);
    //test for script tag inside of heading slider and format the parent element
    var $element = $('.slider div script').parent('div');
    window.setTimeout(function() {
        $element.addClass('child_is_script');
    }, 2000);
    //mobile detection
    //kinda brute but it should work fine
    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 851) {
            width_state_achieved = 'small';
            if (document.getElementById('mbl_css')) {
            } else {
                var a = document.createElement('div');
                a.id = 'headerbutton_container';
                document.getElementById('page-header').appendChild(a);
                window.setTimeout(function() {
                    var b = document.createElement('div'),
                        c = document.createElement('div'),
                        d = document.createElement('div'),
                        x = document.createElement('link');
                    x.rel = 'stylesheet';
                    x.type = 'text/css';
                    x.href = 'css/mbl.css';
                    x.id = 'mbl_css';
                    x.setAttribute('onerror', 'pathup(this)');
                    b.className = 'mainmenu_button';
                    b.setAttribute('onclick', 'menu_is_focused()');
                    b.innerHTML = 'Menu';
                    c.className = 'notifications_button';
                    c.setAttribute('onclick', 'menu_notification()');
                    c.title = 'Notifications';
                    c.innerHTML = '!';
                    d.className = 'announcements_button';
                    d.setAttribute('onclick', '');
                    d.title = 'Announcements';
                    d.innerHTML = '<))';
                    document.getElementById('headerbutton_container').appendChild(b);
                    document.getElementById('headerbutton_container').appendChild(c);
                    document.getElementById('headerbutton_container').appendChild(d);
                    document.getElementsByTagName('head')[0].appendChild(x);
                    $('.mainmenu_button').html('<span>Menu</span>');
                    var mainnav = $('#headerbutton_container').height();
                    $('.mainnavbar_is_static').hide();
                    $('.mainnavbarfiller').hide();
                    $('.slider_container .slider').width('100%');
                    $('.slider_container').css('padding', '0px');
                    $('.slider_container').css('padding-top', mainnav);
                    $('.notifications_button').html('!<span>' + $notification_number + '</span>');
                    //$('.slider_container .slider div').css('', $window.width());
                }, 1);
            }
        } else if (windowsize >= 851) {
            if (width_state_achieved === 'small') {
                $('.mainnavbar').removeAttr('onclick', '$(this).addClass("mainnavbar_focus")');
                $('#mbl_css').remove('#mbl_css');
                $('.mainmenu_button').remove('.mainmenu_button');
                $('.notifications_button').remove('.notifications_button');
                $('.announcements_button').remove('.announcements_button');
                $('.notifications_menu').hide();
                $('#headerbutton_container').remove('#headerbutton_container');
                $('.appmode_button').remove('.appmode_button');
                $('.mainnavbar_is_static #mainnavbarcenter').html($extlinks);
                $('.mainnavbar #mainnavbarcenter').html($intlinks);
                $('.mainnavbar_is_static').show();
                $('.mainnavbarfiller').show();
                $('.slider_container').css('padding', '');
                $('.slider_container .slider').width('');
                mbl_menu_html_inserted = false;
            }
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
    $("body").on("swiperight", function () {
        if (document.getElementById('mbl_css')) {
            if ($('.mainmenu_button').hasClass('mainmenu_is_activated') === false) {
                menu_is_focused();
            }
        }
    });
    $("body").on("swipeleft", function () {
        if (document.getElementById('mbl_css')) {
            if ($('.mainmenu_button').hasClass('mainmenu_is_activated') === true) {
                menu_is_focused();
            }
        }
    });
    $(".mainmenu_button").click(function () {
        $('.mainmenu_button').animate({
            backgroundPosition: '-10px center',
            paddingLeft: 'calc(10% - 10px)',
            width: 'calc(40% + 10px)'
        });
    });
});
function pathup(identity) {
    //pathup goes till onerror === false
    identity.setAttribute('href', '../' + identity.getAttribute('href'));
    console.log('pathing fixed for attribute href: \'' + identity.getAttribute('href') + '\' loaded');
    //written to console incase devs wonder why errors are in console
}
function pathup_src(identity) {
    //pathup goes till onerror === false
    identity.setAttribute('src', '../' + identity.getAttribute('src'));
    console.log('pathing fixed for attribute src: \'' + identity.getAttribute('src') + '\' loaded');
    //written to console incase devs wonder why errors are in console
}
//AppSideMenu
function menu_is_focused() {
    if ($('.mainmenu_button').hasClass('mainmenu_is_activated') === true) {
        $(".mainnavbar_focus").removeClass("mainnavbar_focus");
        $('.mainmenu_button').removeClass('mainmenu_is_activated');
    } else if ($('.mainmenu_button').hasClass('mainmenu_is_activated') === false) {
        $(".mainnavbar").addClass("mainnavbar_focus");
        $('.mainmenu_button').addClass('mainmenu_is_activated');
        if (mbl_menu_html_inserted === false) {
            $extlinks = $('.mainnavbar_is_static #mainnavbarcenter').html();
            $intlinks = $('.mainnavbar.mainnavbar_focus #mainnavbarcenter').html();
            var $appmode = '<a><div class="appmode_button" onclick="toggleFullScreen()">App Mode: <button>OFF</button></div></a>';
            $('.mainnavbar.mainnavbar_focus #mainnavbarcenter').html($appmode + $intlinks + $extlinks);
            $('.mainnavbar_is_static #mainnavbarcenter').html('');
            mbl_menu_html_inserted = true;
        }
    }
}
function menu_notification() {
    if ($('.notifications_menu').hasClass('notifications_menu_is_open') === false) {
        if (document.getElementById('mbl_css')) {
            for (i=0;i<$notification_number;i++) {
                var $html = $('.notifications_menu').html();
                $('.notifications_menu').html($html + '<span class="head">' + $notifications_head[i] + '</span>' + '<span class="body">' + $notifications_body[i] + '</span>');
            }
            if (document.getElementsByClassName('notification_forum')[0]) {
            } else {
                var EXHTML = $('.notifications_menu').html();
                $('.notifications_menu').html('<a href="https://www.lolnet.co.nz/ucp.php?i=ucp_notifications"><button class="notification_forum"> See notifications </button></a>' + EXHTML);
            }
            $('.notifications_menu').addClass('notifications_menu_is_open');
            $heightnotification = $('.notifications_button').height() + 15;
            $heightnotificationoffset = $('.notifications_button').height();
            $('.notifications_menu').css('height', 'calc(100% - ' + $heightnotification + 'px)');
            $('.notifications_menu').css('top', $heightnotificationoffset + 'px');
            $notification_number = 0;
        } else {
            for (i=0;i<$notification_number;i++) {
                var $html = $('.notifications_menu').html();
                $('.notifications_menu').html($html + '<span class="head">' + $notifications_head[i] + '</span>' + '<span class="body">' + $notifications_body[i] + '</span>');
            }
            $('.notifications_menu').addClass('notifications_menu_is_open notifications_desktop_display');
            if (document.getElementsByClassName('notification_forum')[0]) {
            } else {
                var EXHTML = $('.notifications_menu').html();
                $('.notifications_menu').html('<a href="https://www.lolnet.co.nz/ucp.php?i=ucp_notifications"><button class="notification_forum"> See notifications </button></a>' + EXHTML);
            }
            if (document.getElementsByClassName('img_bubble')[0]) {
                $('.img_bubble').show();
                window.setTimeout(function () {$('.img_bubble').css('opacity', '0.38');},1);
            } else {
                var img_bubble = document.createElement('img');
                img_bubble.src = 'img/UI/bubble.png';
                img_bubble.className = 'img_bubble';
                img_bubble.setAttribute('onerror', 'pathup_src(this)');
                document.getElementsByTagName('body')[0].appendChild(img_bubble);
            }
            $notification_number = 0;
            $('.notifications_desktop_display').show();
            window.setTimeout(function () {$('.notifications_desktop_display').css('opacity', '1');},1);
        }
    } else if ($('.notifications_menu').hasClass('notifications_menu_is_open') === true) {
        if (document.getElementById('mbl_css')) {
            $('.notifications_menu').removeClass('notifications_menu_is_open');
            $('.notifications_menu').css('height', '');
        } else {
            $('.notifications_menu').removeClass('notifications_menu_is_open');
            $('.notifications_desktop_display').css('opacity', '0');
            $('.img_bubble').css('opacity', '0');
            window.setTimeout(function () {$('.img_bubble').hide();$('.notifications_desktop_display').hide();}, 200);
        }
    }
}
//AppMode
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||  (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
            $('.appmode_button button').addClass('switched');
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
            $('.appmode_button button').addClass('switched');
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            $('.appmode_button button').addClass('switched');
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
            $('.appmode_button button').removeClass('switched');
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            $('.appmode_button button').removeClass('switched');
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
            $('.appmode_button button').removeClass('switched');
        }
    }
}
$(document).ready(function () {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName  = navigator.appName;
    var fullVersion  = ''+parseFloat(navigator.appVersion); 
    var majorVersion = parseInt(navigator.appVersion,10);
    var nameOffset,verOffset,ix;

    // In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset+6);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
            fullVersion = nAgt.substring(verOffset+8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset+5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset+7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
            fullVersion = nAgt.substring(verOffset+8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset+8);
    }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
        browserName = nAgt.substring(nameOffset,verOffset);
        fullVersion = nAgt.substring(verOffset+1);
        if (browserName.toLowerCase()==browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix=fullVersion.indexOf(";"))!=-1)
        fullVersion=fullVersion.substring(0,ix);
    if ((ix=fullVersion.indexOf(" "))!=-1)
        fullVersion=fullVersion.substring(0,ix);

    majorVersion = parseInt(''+fullVersion,10);
    if (isNaN(majorVersion)) {
        fullVersion  = ''+parseFloat(navigator.appVersion); 
        majorVersion = parseInt(navigator.appVersion,10);
    }
/*
    document.write(''
     +'Browser name  = '+browserName+'<br>'
     +'Full version  = '+fullVersion+'<br>'
     +'Major version = '+majorVersion+'<br>'
     +'navigator.appName = '+navigator.appName+'<br>'
     +'navigator.userAgent = '+navigator.userAgent+'<br>'
    );
*/
    // This script sets OSName variable as follows:
    // "Windows"    for all versions of Windows
    // "MacOS"      for all versions of Macintosh OS
    // "Linux"      for all versions of Linux
    // "UNIX"       for all other UNIX flavors 
    // "Unknown OS" indicates failure to detect the OS
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    if (OSName !== 'MacOS' || browserName === 'Firefox') {
        x = document.createElement('link');
        x.rel = 'stylesheet';
        x.type = 'text/css';
        x.setAttribute('onerror', 'pathup(this)');
        x.href = 'css/win.linux.unix.css';
        x.id = 'win_linux_unix'; 
        document.getElementsByTagName('head')[0].appendChild(x);
    }
});
$(document).ready(function () {
    $.mobile.loading().hide();
    $.mobile.loadingMessage = false;//disable jquery mobile loading event
});