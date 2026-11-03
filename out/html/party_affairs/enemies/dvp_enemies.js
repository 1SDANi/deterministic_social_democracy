window.dvp_enemies = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp enemies');
    
    Q.dvp_enemies_timer = 18;
    Q.dvp_enemies_post_timer = 1;

    if (Q.dvp_business_strength > Q.dvp_liberal_strength + Q.dvp_labor_strength) {
        window.dvp_enemies_left();
    } else if (Q.dvp_business_strength + Q.dvp_regionalist_strength > Q.dvp_liberal_strength + Q.dvp_labor_strength) {
        window.dvp_enemies_kpd();
    } else if (Q.dvp_business_strength + Q.dvp_regionalist_strength > Q.dvp_labor_strength) {
        window.dvp_enemies_revolutionaries();
    } else if (Q.dvp_liberal_strength + Q.dvp_labor_strength > Q.dvp_business_strength + Q.dvp_regionalist_strength) {
        if (Q.nsdap_votes >= 20) {
            window.dvp_enemies_nsdap();
        } else {
            window.dvp_enemies_reactionaries();
        }
    } else {
        window.dvp_enemies_anti_dem();
    }
};

window.dvp_enemies_anti_dem = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_enemies = "anti-democratic parties";

    Q.dvp_kpd_relation -= 10;
    Q.dvp_dnvp_relation -= 10;
    Q.dvp_nsdap_relation -= 10;

    Q.workers_kpd -= 2;
    Q.unemployed_kpd -= 2;
    Q.workers_dnvp -= 2;
    Q.unemployed_dnvp -= 2;
    Q.workers_nsdap -= 2;
    Q.unemployed_nsdap -= 2;

    Q.dvp_liberal_strength += 5;
    
    Q.dvp_business_dissent += 5;
};

window.dvp_enemies_nsdap = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_enemies = "nsdap";

    Q.dvp_nsdap_relation -= 15;

    Q.workers_nsdap -= 3;
    Q.unemployed_nsdap -= 4;

    Q.dvp_labor_strength += 5;
};

window.dvp_enemies_kpd = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_enemies = "kpd";

    Q.dvp_kpd_relation -= 15;

    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 4;

    Q.dvp_business_strength += 5;

    Q.dvp_labor_dissent += 5;
    Q.dvp_business_dissent -= 5;
};

window.dvp_enemies_left = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_enemies = "left";

    Q.dvp_relation -= 10;
    Q.dvp_kpd_relation -= 10;

    Q.workers_spd -= 2;
    Q.unemployed_spd -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.dvp_business_strength += 5;

    Q.dvp_labor_dissent += 5;
    Q.dvp_liberal_dissent += 5;
    Q.dvp_business_dissent -= 5;
};

window.dvp_enemies_reactionaries = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_enemies = "reactionaries";

    Q.dvp_dnvp_relation -= 10;
    Q.dvp_nsdap_relation -= 10;

    Q.workers_dnvp -= 2;
    Q.unemployed_dnvp -= 2;
    Q.workers_nsdap -= 3;
    Q.unemployed_nsdap -= 3;

    Q.dvp_labor_strength += 5;

    Q.dvp_regionalist_dissent += 5;
    Q.dvp_business_dissent += 5;
    Q.dvp_labor_dissent -= 5;
};

window.dvp_enemies_revolutionaries = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_enemies = "revolutionaries";

    Q.dvp_kpd_relation -= 10;
    Q.dvp_nsdap_relation -= 10;

    Q.workers_nsdap -= 2;
    Q.unemployed_nsdap -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.dvp_liberal_strength += 5;
};