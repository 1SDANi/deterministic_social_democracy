window.dnvp_media = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp media');

    Q.dnvp_media_timer += 6;
    Q.dnvp_media_post_timer = 1;

    if (Q.dvp_relation > Q.dvp_dnvp_relation || (Q.ddp_in_government && Q.kpd_in_government)) {
        window.dvp_media_Fundliberals();
    } else if (Q.dvp_labor_strength > Q.dvp_nationalist_strength + Q.dvp_industrialist_strength) {
        window.dvp_media_DerTag();
    } else if (Q.ddp_labor_strength > Q.ddp_regionalist_strength + Q.ddp_business_strength) {
        window.dvp_media_BerlinerLokalAnzeiger();
    } else if (Q.nsdap_votes + Q.kpd_votes + Q.spd_votes >= 50) {
        window.dvp_media_BerlinerIllustrierteNachtausgabe();
    } else if (Q.dnvp_authoritarian_strength > Q.dnvp_agrarian_strength && Q.dnvp_authoritarian_strength > Q.dnvp_volkskonservativ_strength && Q.dnvp_authoritarian_strength > Q.dnvp_christian_social_strength) {
        window.dvp_media_UniversumFilm();
    } else if (Q.dnvp_agrarian_strength > Q.dnvp_authoritarian_strength && Q.dnvp_agrarian_strength > Q.dnvp_christian_social_strength && Q.dnvp_agrarian_strength > Q.dnvp_volkskonservativ_strength) {
        window.dvp_media_SelfHelp();
    } else if (Q.dnvp_christian_social_strength > Q.dnvp_authoritarian_strength && Q.dnvp_christian_social_strength > Q.dnvp_volkskonservativ_strength && Q.dnvp_christian_social_strength > Q.dnvp_agrarian_strength) {
        window.dvp_media_Corporatism();
    } else if (Q.dnvp_volkskonservativ_strength > Q.dnvp_agrarian_strength && Q.dnvp_volkskonservativ_strength > Q.dnvp_authoritarian_strength && Q.dnvp_volkskonservativ_strength > Q.dnvp_christian_social_strength) {
        window.dvp_media_AgainstKulturmanchestertum();
    } else {
        window.dvp_media_UniversumFilm();
    }
};

window.dvp_media_UniversumFilm = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_authoritarian_strength += 5;

    Q.unemployed_dnvp += 1*(1-Q.dnvp_dissent);
    Q.workers_dnvp += 1*(1-Q.dnvp_dissent);
    Q.new_middle_dnvp += 1*(1-Q.dnvp_dissent);
    Q.old_middle_dnvp += 1*(1-Q.dnvp_dissent);
    Q.rural_dnvp += 1*(1-Q.dnvp_dissent);
    Q.catholics_dnvp += 1*(1-Q.dnvp_dissent);
};

window.dvp_media_DerTag = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_industrialist_strength += 3;

    Q.old_middle_dnvp += 6*(1-Q.dnvp_dissent);

    Q.pro_republic -= 2*(1-Q.dnvp_dissent);
    Q.socialism -= 1*(1-Q.dnvp_dissent);
    Q.nationalism += 1*(1-Q.dnvp_dissent);
};

window.dvp_media_BerlinerLokalAnzeiger = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.ddp_business_strength += 3;

    Q.new_middle_dnvp += 6*(1-Q.dnvp_dissent);

    Q.pro_republic -= 2*(1-Q.dnvp_dissent);
    Q.socialism -= 1*(1-Q.dnvp_dissent);
    Q.nationalism += 1*(1-Q.dnvp_dissent);
};

window.dvp_media_BerlinerIllustrierteNachtausgabe = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.nsdap_volkisch_strength += 3;

    Q.workers_dnvp += 3*(1-Q.dnvp_dissent);
    Q.unemployed_dnvp += 3*(1-Q.dnvp_dissent);

    Q.pro_republic -= 3*(1-Q.dnvp_dissent);
    Q.socialism -= 2*(1-Q.dnvp_dissent);
    Q.nationalism += 2*(1-Q.dnvp_dissent);
};

window.dvp_media_Fundliberals = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_resources -= 1;

    Q.ddp_business_strength += 3;
    Q.dvp_industrialist_strength += 3;

    Q.new_middle_ddp += 1*(1-Q.ddp_dissent);
    Q.old_middle_dvp += 1*(1-Q.dvp_dissent);

    Q.pro_republic -= 1*(1-Q.dnvp_dissent);
    Q.socialism -= 2*(1-Q.dnvp_dissent);
    Q.nationalism += 1*(1-Q.dnvp_dissent);
};

window.dvp_media_SelfHelp = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_agrarian_strength += 3;

    Q.rural_dnvp += 2*(1-Q.dnvp_dissent);
    Q.new_middle_dnvp += 2*(1-Q.dnvp_dissent);
    Q.old_middle_dnvp += 2*(1-Q.dnvp_dissent);

    Q.pro_republic += 1*(1-Q.dnvp_dissent);
    Q.socialism -= 1*(1-Q.dnvp_dissent);
    Q.nationalism += 2*(1-Q.dnvp_dissent);
};

window.dvp_media_Corporatism = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_christian_social_strength += 3;

    Q.unemployed_dnvp += 1*(1-Q.dnvp_dissent);
    Q.workers_dnvp += 2*(1-Q.dnvp_dissent);
    Q.new_middle_dnvp += 1*(1-Q.dnvp_dissent);
    Q.old_middle_dnvp += 1*(1-Q.dnvp_dissent);
    Q.rural_dnvp += 1*(1-Q.dnvp_dissent);

    Q.pro_republic += 1*(1-Q.dnvp_dissent);
    Q.socialism -= 2*(1-Q.dnvp_dissent);
    Q.nationalism += 1*(1-Q.dnvp_dissent);
};

window.dvp_media_AgainstKulturmanchestertum = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_volkskonservativ_strength += 3;

    Q.catholics_dnvp += 2*(1-Q.dnvp_dissent);
    Q.rural_dnvp += 2*(1-Q.dnvp_dissent);
    Q.old_middle_dnvp += 1*(1-Q.dnvp_dissent);
    Q.new_middle_dnvp += 1*(1-Q.dnvp_dissent);

    Q.pro_republic += 2*(1-Q.dnvp_dissent);
    Q.socialism -= 1*(1-Q.dnvp_dissent);
    Q.nationalism += 1*(1-Q.dnvp_dissent);
};