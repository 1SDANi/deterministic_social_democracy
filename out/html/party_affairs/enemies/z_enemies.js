window.z_enemies = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z enemies');
    
    Q.z_enemies_timer = 18;
    Q.z_enemies_post_timer = 1;

    if (Q.z_conservative_strength > Q.z_center_strength + Q.z_left_strength + Q.z_labor_strength) {
        window.z_enemies_left();
    } else if (Q.z_conservative_strength > Q.z_left_strength + Q.z_labor_strength) {
        window.z_enemies_kpd();
    } else if (Q.z_conservative_strength > Q.z_left_strength && Q.z_conservative_strength > Q.z_labor_strength) {
        window.z_enemies_revolutionaries();
    } else if (Q.z_left_strength + Q.z_labor_strength > Q.z_conservative_strength + Q.z_center_strength) {
        if (Q.nsdap_votes >= 20) {
            window.z_enemies_nsdap();
        } else {
            window.z_enemies_reactionaries();
        }
    } else {
        window.z_enemies_anti_dem();
    }
};

window.z_enemies_anti_dem = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_enemies = "anti-democratic parties";

    Q.z_kpd_relation -= 10;
    Q.z_dnvp_relation -= 10;
    Q.z_nsdap_relation -= 10;

    Q.workers_kpd -= 2;
    Q.unemployed_kpd -= 2;
    Q.workers_dnvp -= 2;
    Q.unemployed_dnvp -= 2;
    Q.workers_nsdap -= 2;
    Q.unemployed_nsdap -= 2;

    Q.z_center_strength += 5;
    
    Q.z_conservative_dissent += 5;
};

window.z_enemies_nsdap = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_enemies = "nsdap";

    Q.z_nsdap_relation -= 15;

    Q.workers_nsdap -= 3;
    Q.unemployed_nsdap -= 4;

    Q.z_left_strength += 5;
};

window.z_enemies_kpd = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_enemies = "kpd";

    Q.z_kpd_relation -= 15;

    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 4;

    Q.z_conservative_strength += 5;

    Q.z_left_dissent += 5;
    Q.z_conservative_dissent -= 5;
};

window.z_enemies_left = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_enemies = "left";

    Q.z_relation -= 10;
    Q.z_kpd_relation -= 10;

    Q.workers_spd -= 2;
    Q.unemployed_spd -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.z_conservative_strength += 5;

    Q.z_left_dissent += 5;
    Q.z_labor_dissent += 5;
    Q.z_conservative_dissent -= 5;
};

window.z_enemies_reactionaries = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_enemies = "reactionaries";

    Q.z_dnvp_relation -= 10;
    Q.z_nsdap_relation -= 10;

    Q.workers_dnvp -= 2;
    Q.unemployed_dnvp -= 2;
    Q.workers_nsdap -= 3;
    Q.unemployed_nsdap -= 3;

    Q.z_left_strength += 5;

    Q.z_center_dissent += 5;
    Q.z_conservative_dissent += 5;
    Q.z_left_dissent -= 5;
};

window.z_enemies_revolutionaries = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_enemies = "revolutionaries";

    Q.z_kpd_relation -= 10;
    Q.z_nsdap_relation -= 10;

    Q.workers_nsdap -= 2;
    Q.unemployed_nsdap -= 2;
    Q.workers_kpd -= 3;
    Q.unemployed_kpd -= 3;

    Q.z_labor_strength += 5;
};