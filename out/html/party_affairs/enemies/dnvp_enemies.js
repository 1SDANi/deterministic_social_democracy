window.dnvp_enemies = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp enemies');

    Q.dnvp_enemies_timer = 18;
    Q.dnvp_enemies_post_timer = 1;

    if (Q.dnvp_authoritarian_strength > Q.dnvp_christian_social_strength + Q.dnvp_volkskonservativ_strength) {
        window.dnvp_enemies_progressives();
    } else if (Q.dnvp_authoritarian_strength > Q.dnvp_volkskonservativ_strength && Q.dnvp_authoritarian_strength > Q.dnvp_christian_social_strength) {
        window.dnvp_enemies_left();
    } else if (Q.dnvp_christian_social_strength + Q.dnvp_volkskonservativ_strength > Q.dnvp_authoritarian_strength + Q.dnvp_agrarian_strength) {
        if (Q.dnvp_christian_social_strength > Q.dnvp_volkskonservativ_strength) {
            window.dnvp_enemies_workers();
        } else {
            if (Q.nsdap_votes >= 30 && Q.dnvp_volkskonservativ_strength > Q.dnvp_authoritarian_strength + Q.dnvp_agrarian_strength + Q.dnvp_christian_social_strength) {
                window.dnvp_enemies_nsdap();
            } else {
                window.dnvp_enemies_revolutionaries();
            }
        }
    } else {
        window.dnvp_enemies_kpd();
    }
};

window.dnvp_enemies_progressives = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_enemies = "progressives";

    Q.dnvp_kpd_relation -= 10;
    Q.dnvp_spd_relation -= 10;
    Q.ddp_dnvp_relation -= 10;

    Q.workers_ddp -= 2;
    Q.unemployed_ddp -= 2;
    Q.workers_spd -= 2;
    Q.unemployed_spd -= 2;
    Q.workers_sapd -= 2;
    Q.unemployed_sapd -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.dnvp_authoritarian_strength += 5;
    
    Q.dnvp_volkskonservativ_dissent += 5;
    Q.dnvp_authoritarian_dissent -= 5;
};

window.dnvp_enemies_left = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_enemies = "left";

    Q.dnvp_kpd_relation -= 10;
    Q.dnvp_spd_relation -= 10;

    Q.workers_spd -= 2;
    Q.unemployed_spd -= 2;
    Q.workers_sapd -= 2;
    Q.unemployed_sapd -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.dnvp_authoritarian_strength += 5;
};

window.dnvp_enemies_kpd = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_enemies = "kpd";

    Q.dnvp_kpd_relation -= 15;

    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 4;

    Q.dnvp_authoritarian_strength += 5;
};

window.dnvp_enemies_workers = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_enemies = "workers";

    Q.dnvp_kpd_relation -= 10;
    Q.dnvp_spd_relation -= 10;
    Q.dnvp_nsdap_relation -= 10;

    Q.workers_nsdap -= 2;
    Q.unemployed_nsdap -= 2;
    Q.workers_spd -= 2;
    Q.unemployed_spd -= 2;
    Q.workers_sapd -= 2;
    Q.unemployed_sapd -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.dnvp_christian_social_strength += 5;
    
    Q.dnvp_authoritarian_dissent += 5;
    Q.dnvp_christian_social_dissent -= 5;
};

window.dnvp_enemies_revolutionaries = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_enemies = "revolutionaries";

    Q.dnvp_kpd_relation -= 10;
    Q.dnvp_nsdap_relation -= 10;

    Q.workers_nsdap -= 2;
    Q.unemployed_nsdap -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.dnvp_volkskonservativ_strength += 5;
    
    Q.dnvp_authoritarian_dissent += 5;
};

window.dnvp_enemies_nsdap = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dnvp_enemies = "nsdap";

    Q.dnvp_nsdap_relation -= 15;

    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 4;

    Q.dnvp_volkskonservativ_strength += 5;
    
    Q.dnvp_agrarian_dissent += 5;
    Q.dnvp_authoritarian_dissent += 5;
    Q.dnvp_volkskonservativ_dissent -= 5;
};