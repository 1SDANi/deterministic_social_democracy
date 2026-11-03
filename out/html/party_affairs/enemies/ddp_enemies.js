window.ddp_enemies = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp enemies');
    
    Q.ddp_enemies_timer = 18;
    Q.ddp_enemies_post_timer = 1;

    if (Q.ddp_business_strength > Q.ddp_liberal_strength + Q.ddp_labor_strength) {
        window.ddp_enemies_left();
    } else if (Q.ddp_business_strength + Q.ddp_regionalist_strength > Q.ddp_liberal_strength + Q.ddp_labor_strength) {
        window.ddp_enemies_kpd();
    } else if (Q.ddp_business_strength + Q.ddp_regionalist_strength > Q.ddp_labor_strength) {
        window.ddp_enemies_revolutionaries();
    } else if (Q.ddp_liberal_strength + Q.ddp_labor_strength > Q.ddp_business_strength + Q.ddp_regionalist_strength) {
        if (Q.nsdap_votes >= 20) {
            window.ddp_enemies_nsdap();
        } else {
            window.ddp_enemies_reactionaries();
        }
    } else {
        window.ddp_enemies_anti_dem();
    }
};

window.ddp_enemies_anti_dem = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.ddp_enemies = "anti-democratic parties";

    Q.ddp_kpd_relation -= 10;
    Q.ddp_dnvp_relation -= 10;
    Q.ddp_nsdap_relation -= 10;

    Q.workers_kpd -= 2;
    Q.unemployed_kpd -= 2;
    Q.workers_dnvp -= 2;
    Q.unemployed_dnvp -= 2;
    Q.workers_nsdap -= 2;
    Q.unemployed_nsdap -= 2;

    Q.ddp_liberal_strength += 5;
    
    Q.ddp_business_dissent += 5;
};

window.ddp_enemies_nsdap = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.ddp_enemies = "nsdap";

    Q.ddp_nsdap_relation -= 15;

    Q.workers_nsdap -= 3;
    Q.unemployed_nsdap -= 4;

    Q.ddp_labor_strength += 5;
};

window.ddp_enemies_kpd = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.ddp_enemies = "kpd";

    Q.ddp_kpd_relation -= 15;

    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 4;

    Q.ddp_business_strength += 5;

    Q.ddp_labor_dissent += 5;
    Q.ddp_business_dissent -= 5;
};

window.ddp_enemies_left = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.ddp_enemies = "left";

    Q.ddp_relation -= 10;
    Q.ddp_kpd_relation -= 10;

    Q.workers_spd -= 2;
    Q.unemployed_spd -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.ddp_business_strength += 5;

    Q.ddp_labor_dissent += 5;
    Q.ddp_liberal_dissent += 5;
    Q.ddp_business_dissent -= 5;
};

window.ddp_enemies_reactionaries = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.ddp_enemies = "reactionaries";

    Q.ddp_dnvp_relation -= 10;
    Q.ddp_nsdap_relation -= 10;

    Q.workers_dnvp -= 2;
    Q.unemployed_dnvp -= 2;
    Q.workers_nsdap -= 3;
    Q.unemployed_nsdap -= 3;

    Q.ddp_labor_strength += 5;

    Q.ddp_regionalist_dissent += 5;
    Q.ddp_business_dissent += 5;
    Q.ddp_labor_dissent -= 5;
};

window.ddp_enemies_revolutionaries = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.ddp_enemies = "revolutionaries";

    Q.ddp_kpd_relation -= 10;
    Q.ddp_nsdap_relation -= 10;

    Q.workers_nsdap -= 2;
    Q.unemployed_nsdap -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.ddp_liberal_strength += 5;
};