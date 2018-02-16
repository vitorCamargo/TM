$("#mainpage").ready(function(){
    setTimeout(pass, 5500);
});

var pass = function(){
    activate_page("#page_Home");
};
$(document).ready(function(){
    //GROUPS JAVA
    $("#group1").click(function(){
        $("#back_artist").css("background-image", "url(http://cdnimg.melon.co.kr/cm/album/images/027/09/585/2709585_org.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "http://www.asianjunkie.com/wp-content/uploads/2016/09/RedVelvetRussianRouletteGroup.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("Red Velvet"); 
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/276361656&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Red Velvet (Hangul: 레드벨벳) é um girl-group sul-coreano formado pela SM Entertainment no dia 01 de Agosto em 2014, que estreou com o MV Happiness. O nome do grupo reúne vermelho, a cor da sedução, e veludo, que demonstra imagens femininas e suaves. Atualmente o grupo é composto por cinco integrantes: Irene, Seulgi, Wendy, Joy e Yeri.");
        activate_page("#page_Artist");
    });
    
    $("#group2").click(function(){
        $("#back_artist").css("background-image", "url(https://lh5.googleusercontent.com/-VLrKcFBt4j0/AAAAAAAAAAI/AAAAAAAANnI/QQsgm-wRyDE/s0-c-k-no-ns/photo.jpg)");
        $("#back_artist").css("background-size", "cover");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#back_artist").css("background-position-y", "0px");
        $("#img_profile").attr("src", "http://0.soompi.io/wp-content/uploads/2016/10/20001609/SHINee7.png");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("SHINee");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277412855&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Shinee (Em coreano: 샤이니) é um boy group sul-coreano de R&B contemporâneo. Formado pela S.M. Entertainment em 2008, o grupo estreou em 25 de maio de 2008 no programa Inkigayo da SBS com o single 'Noona Neomu Yeppeo (Replay)'. O grupo consiste em Onew, Jonghyun, Key, Minho e Taemin.");
        activate_page("#page_Artist");
    });
    
    $("#group3").click(function(){
        $("#back_artist").css("background-image", "url(https://oncetwicebrasil.files.wordpress.com/2016/10/1.jpg?w=350&h=200&crop=1)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "http://images.kpopstarz.com/data/thumbs/full/492576/600/0/0/0/twice-coaster-lane-1-jpg.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("TWICE");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277134393&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Twice (hangul: 트와이스) é um grupo sul coreano formado pela JYP Entertainment em 2015 através do reality show Sixteen. O grupo é composto de nove integrantes: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung e Tzuyu.");
        activate_page("#page_Artist");
    });
    
    $("#group4").click(function(){
        $("#back_artist").css("background-image", "url(http://www.suju.com.br/wp-content/themes/Devil/images/headers/banner.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "https://upload.wikimedia.org/wikipedia/en/f/f3/Devil_Super_Junior_album.png");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("Super Junior");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277664741&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Super Junior (hangul: 슈퍼주니어) é uma boy band sul-coreana produzida por Lee Soo-man e formada pela empresa e gravadora SM Entertainment. O grupo estreou, inicialmente, com 12 integrantes, em 6 de novembro de 2005, no programa musical Inkigayo, com o single 'Twins (Knock Out)'.");
        activate_page("#page_Artist");
    });
    
    $("#group5").click(function(){
        $("#back_artist").css("background-image", "url(https://i.ytimg.com/vi/Z9et0gClkXY/maxresdefault.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "http://www.helloasia.com.au/wp-content/uploads/2015/10/fx_4_Walls.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("F(x)");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277664850&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("f(x) (em coreano: 에프엑스) é um girl group sul-coreano, criado pela SM Entertainment em 2009. O grupo é formado por Victoria, Amber, Luna e Krystal. A formação original incluía Sulli, que anunciou sua saída em Agosto de 2015. O grupo fez sua estréia em 5 de setembro de 2009, com o lançamento do single digital 'LA chA TA''.");
        activate_page("#page_Artist");
    });
    
    $("#group6").click(function(){
        $("#back_artist").css("background-image", "url(https://s3-ap-northeast-1.amazonaws.com/ibighit/bts/wings/mainphoto/2.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "http://s1.ibtimes.com/sites/www.ibtimes.com/files/2016/09/30/bts-wings-album-cover.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("BTS");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277112460&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Bangtan Boys (em coreano: 방탄소년단), também conhecido como BTS, é um grupo sul-coreano de K-pop composto por sete integrantes, cuja formação é Jin, Suga, J-Hope, Rap Monster, Jimin, V e Jungkook.");
        activate_page("#page_Artist");
    });
    
    $("#group7").click(function(){
        $("#back_artist").css("background-image", "url(http://cdn.koreaboo.com/wp-content/uploads/2015/06/girlsgeneration_party.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "https://i.ytimg.com/vi/JLde5oWY-oI/maxresdefault.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("Girls Generation");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277101807&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Girls' Generation (em coreano: 소녀시대) é um girl group sul-coreano formado pela SM Entertainment em 2007. Elas são conhecidas no Japão como Shoujo Jidai (em japonês: 少女時代) e também são chamadas como SoShi (소시) ou SNSD pelos seus fãs, ambas formas abreviadas do nome do grupo em coreano.");
        activate_page("#page_Artist");
    });
    
    $("#group8").click(function(){
        $("#back_artist").css("background-image", "url(http://4.bp.blogspot.com/-D3oP0PHgnow/VmdyLqOzyYI/AAAAAAAAW6I/M0c2y0t_fg4/s1600/10_ASDFDSDFS1111.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Exo_Lotto_album_cover.jpg/220px-Exo_Lotto_album_cover.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("EXO");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277094590&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("EXO (em coreano: 엑소) é um boy group sul-coreano/chinês criado pela SM Entertainment, que teve sua estreia em 2012. O grupo foi formado originalmente por 12 membros, mas com a saída de 3 membros, o grupo possui atualmente 9 membros.");
        activate_page("#page_Artist");
    });
    
    $("#group9").click(function(){
        $("#back_artist").css("background-image", "url(http://cdn.koreaboo.com/wp-content/uploads/2016/06/sistar-1.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "http://kpoply.com/wp-content/uploads/2016/06/SISTAR-I-Like-That-Lyrics.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("SISTAR");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277101716&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Sistar (em coreano: 씨스타) é um girl group sul-coreano formado pela Starship Entertainment. É constituído por quatro integrantes: Hyorin, Bora, Soyou e Dasom. Em 3 de junho de 2010, lançaram o primeiro single 'Push Push' e fizeram sua estreia no progama Music Bank da emissora KBS.");
        activate_page("#page_Artist");
    });
    
    $("#group10").click(function(){
        $("#back_artist").css("background-image", "url(https://elogot7.files.wordpress.com/2016/03/got7.jpg?w=665)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "https://alwaysdreaminghigh.files.wordpress.com/2016/09/turbulence.jpg?w=584");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("GOT7");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277093878&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("GOT7 (em coreano: 갓세븐) é um boy group de Hip hop com sede na Coreia do Sul. Formado pela JYP Entertainment em 2014, GOT7 é composto por sete membros, dois dos quais originalmente estrearam na dupla JJ Project em 2012. Sua formação é JB, Mark, Jinyoung, Jackson, Youngjae, Bambam e Yugyeom.");
        activate_page("#page_Artist");
    });
    
    $("#group11").click(function(){
        $("#back_artist").css("background-image", "url(http://vignette1.wikia.nocookie.net/drama/images/3/36/2NE1_2016.jpg/revision/latest?cb=20160531025622&path-prefix=es)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "https://upload.wikimedia.org/wikipedia/pt/9/9d/2NE1_CRUSH.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("2ne1");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277109021&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("2NE1 (em hangul: 투애니원) é um girl-group sul-coreano formado pela YG Entertainment em 2009, também conhecido como um dos maiores grupos femininos de kpop. Inicialmente, o grupo era formado por quatro integrantes, sendo elas Park Bom, Sandara Park, CL e Minzy. Minzy oficialmente saiu do grupo em 5 de abril de 2016.");
        activate_page("#page_Artist");
    });
    
    $("#group12").click(function(){
        $("#back_artist").css("background-image", "url(https://1.bp.blogspot.com/-euKGVG6ZqSw/Vx_KGV4uDoI/AAAAAAAAOwc/VGUnThRn_lsuj9_BXm5uueQ3SRXI66pfwCLcB/s1600/FOTO%2B1.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "https://4.bp.blogspot.com/-a_TWPPxJGUA/V38Hz1qa4GI/AAAAAAAAI60/I6S4k6rzfgct4b1hhY9pEpbLdoItAHU1ACLcB/s1600/cover.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("Seventeen");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277105463&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Seventeen (em coreano: 세븐틴), é um boy group sul-coreano formado pela Pledis Entertainment em 2015. O grupo consiste em treze membros e é dividido em três sub-unidades com diferentes áreas de especialização: a 'hip-hop unit', 'vocal unit' e 'performance unit'.");
        activate_page("#page_Artist");
    });
    
    $("#group13").click(function(){
        $("#back_artist").css("background-image", "url(http://static.tumblr.com/4b82025e938a1087ae257b6196719063/5sdwj6p/QWcobnupw/tumblr_static_ak4y7y9edegc8cs88gsc8sogs.png)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "https://2.bp.blogspot.com/-CKRYgroK37I/WBdnghM-YoI/AAAAAAAABCs/eRE09FjedAcUF9p_YPuVtubsFOMfeJDogCLcB/s1600/%255BSingle%255D%2BBLACKPINK%2B%25E2%2580%2593%2BSQUARE%2BTWO.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("BLACK PINK");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277093414&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("BLACKPINK (em coreano: 블랙핑크) é um girl group sul-coreano formado em 2016 pela YG Entertainment. O grupo é composto por quatro membros: Jisoo, Jennie, Rosé e Lisa. Debutaram no dia 8 de agosto com duas faixas-títulos: Whistle e Boombayah.");
        activate_page("#page_Artist");
    });
    
    $("#group14").click(function(){
        $("#back_artist").css("background-image", "url(http://www.billboard.com/files/styles/article_main_image/public/media/bigbang_kpop2015_650.png)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "http://upload.wikimedia.org/wikipedia/commons/c/c3/BigBang_-_M_(Single_Album).jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("Big Bang");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277098943&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Big Bang (em coreano: 빅뱅) é um boy group sul-coreano formado pela YG Entertainment, tendo sua estreia oficial datada em 19 de agosto de 2006. Seus membros são G-Dragon, T.O.P, Taeyang, Daesung e Seungri.");
        activate_page("#page_Artist");
    });
    
    $("#group15").click(function(){
        $("#back_artist").css("background-image", "url(http://0.soompi.io/wp-content/uploads/2016/06/29070913/gfriend-3.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "http://0.soompi.io/wp-content/uploads/2016/05/16171526/GFriend.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("GFriend");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277123712&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("GFriend (hangul: 여자친구) é um girl group sul-coreano formado pela Source Music em 2015. Elas fizeram sua estreia com o EP 'Season of Glass'. O grupo possui 6 integrantes: Sowon, Yerin, Eunha, Yuju, SinB e Umji. O grupo segue um estilo conhecido como Bubblegum Pop. Seu fã-clube oficial se chama Buddy.");
        activate_page("#page_Artist");
    });
    
    $("#group16").click(function(){
        $("#back_artist").css("background-image", "url(http://0.soompi.io/wp-content/uploads/2016/10/30084138/ASTRO-2.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "https://3.bp.blogspot.com/-psmtBkaXpaM/WCPNInaIn7I/AAAAAAAAJKk/l5cYmPF7UhEVtQkjLHvXoqU77i27mQpsQCLcB/s1600/cover.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("ASTRO");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277128762&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("Astro (em coreano: 아스트로) é um boy group sul-coreano de K-pop formado pela gravadora Fantagio Entertainment em 2016. É composto por seis membros: MJ, Jin Jin, Eunwoo, Moon Bin, Rocky e Sanha. O grupo estreou em 18 de agosto de 2015, na série sul-coreana To Be Continued.");
        activate_page("#page_Artist");
    });
    
    $("#group17").click(function(){
        $("#back_artist").css("background-image", "url(http://cdn.koreaboo.com/wp-content/uploads/2015/12/btob-1.jpg)");
        $("#back_artist").css("background-size", "100% 100%");
        $("#back_artist").css("background-position", "center");
        $("#back_artist").css("background-repeat", "no-repeat");
        $("#img_profile").attr("src", "http://imgcache.wechat.com/music/joox/photo/mid_album_265/c/6/b609161f0e6f20c6.jpg");
        $("#txtNome_Artist").empty(); 
        $("#txtNome_Artist").append("BTOB");
        $("#player_Artist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277417318&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        $("#txtInfo_Artist").empty();
        $("#txtInfo_Artist").append("BTOB (em coreano: 비투비 acrônimo de Born to Beat) é um boy group sul-coreano de sete membros formado em 2012 pela Cube Entertainment. O grupo consiste em Seo Eunkwang, Lee Min Hyuk, Lee Changsub, Lim Hyunsik, Peniel D. Shin/Shin Dong-geun, Jung Ilhoon e Yook Sungjae. O grupo debutou em 22 de março de 2012, no M! Countdown com a música Insane e Imagine.");
        activate_page("#page_Artist");
    });
    
    // PLAYLISTS JAVA
    $("#playlist1").click(function(){
        $("#back_playlist").css("background-image", "url(https://u.scdn.co/images/pl/default/c45902aceaddb2edea532da0d343371d11707d03)");
        $("#title_playlist").empty();
        $("#title_playlist").append("Women of KPOP");
        $("#slogan_playlist").empty();
        $("#slogan_playlist").append("Os mais lacrantes solos femininos de todos os tempos.");
        $("#player_playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277664986&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        activate_page("#page_Playlists");
    });
    
    $("#playlist2").click(function(){
        $("#back_playlist").css("background-image", "url(https://u.scdn.co/images/pl/default/c82913f8e915c577ad4737bf7ab70d48a28411a8)");
        $("#title_playlist").empty();
        $("#title_playlist").append("K-Boyband Hysteria");
        $("#slogan_playlist").empty();
        $("#slogan_playlist").append("As mais quentes dos mais populares boygroups da Coreia.");
        $("#player_playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277544499&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        activate_page("#page_Playlists");
    });
    
    $("#playlist3").click(function(){
        $("#back_playlist").css("background-image", "url(https://u.scdn.co/images/pl/default/f038573db048a8a2bf341c94b66b22854ed3d6df)");
        $("#title_playlist").empty();
        $("#title_playlist").append("K-Ballads: Fall For Autumn");
        $("#slogan_playlist").empty();
        $("#slogan_playlist").append("As principais ballads tocadas ao cair das folhas do outono.");
        $("#player_playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277666632&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        activate_page("#page_Playlists");
    });
    
    $("#playlist4").click(function(){
        $("#back_playlist").css("background-image", "url(https://u.scdn.co/images/pl/default/64d3527cd8f580801686d0e8cebc3d6d4d998e56)");
        $("#title_playlist").empty();
        $("#title_playlist").append("The Best of K-Pop Hits");
        $("#slogan_playlist").empty();
        $("#slogan_playlist").append("Os melhores mix's dos principais hits do K-Pop.");
        $("#player_playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277637231&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        activate_page("#page_Playlists");
    });
    
    $("#playlist5").click(function(){
        $("#back_playlist").css("background-image", "url(https://u.scdn.co/images/pl/default/fe62b83a1f395505a837639a6563dc435fd94557)");
        $("#title_playlist").empty();
        $("#title_playlist").append("K-Pop Collab Surprises: SM Station");
        $("#slogan_playlist").empty();
        $("#slogan_playlist").append("As maiores colaborações feitas pela SM Station.");
        $("#player_playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277666877&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        activate_page("#page_Playlists");
    });
    
    $("#playlist6").click(function(){
        $("#back_playlist").css("background-image", "url(https://u.scdn.co/images/pl/default/2f0db37b170d318fbb124d513de3627882d5af15)");
        $("#title_playlist").empty();
        $("#title_playlist").append("Fantastics K-Workout: Mix's");
        $("#slogan_playlist").empty();
        $("#slogan_playlist").append("Os mais fantásticos covers já listados até hoje.");
        $("#player_playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277638669&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        activate_page("#page_Playlists");
    });
    
    $("#playlist7").click(function(){
        $("#back_playlist").css("background-image", "url(https://u.scdn.co/images/pl/default/f16f2ca120d36b8fac4496bb14a2b975ed1bd335)");
        $("#title_playlist").empty();
        $("#title_playlist").append("K-Pop Daebak");
        $("#slogan_playlist").empty();
        $("#slogan_playlist").append("Os sucessos representados pelas melhores units de groups do K-Pop.");
        $("#player_playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277667051&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        activate_page("#page_Playlists");
    });
    
    $("#playlist8").click(function(){
        $("#back_playlist").css("background-image", "url(https://u.scdn.co/images/pl/default/d091ea524bbf80fabd14be37b728991118c3c14e)");
        $("#title_playlist").empty();
        $("#title_playlist").append("2016 MAMA");
        $("#slogan_playlist").empty();
        $("#slogan_playlist").append("Os pricipais Hits que marcaram a maior premiação de K-Pop da Coreia.");
        $("#player_playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277643078&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        activate_page("#page_Playlists");
    });
});