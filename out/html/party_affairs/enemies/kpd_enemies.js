window.kpd_enemies = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd enemies');
    
    Q.kpd_enemies_timer = 18;
    Q.kpd_enemies_post_timer = 1;

    if (Q.kpd_leader == "Weddingers") {
        if (Q.kpd_relation < 40) {
            if (Q.spd_votes >= 40) {
                window.kpd_enemies_spd();
            } else if (Q.weimar_coalition > Q.far_right_coalition) {
                window.kpd_enemies_weimar();
            } else if (Q.spd_votes >= 30) {
                window.kpd_enemies_fascists();
            } else {
                window.kpd_enemies_bourgeois();
            }
        } else {
            if (Q.nsdap_votes >= 30) {
                window.kpd_enemies_nsdap();
            } else if (Q.far_right_coalition > Q.right_coalition) {
                window.kpd_enemies_reactionaries();
            } else {
                window.kpd_enemies_bourgeois();
            }
        }
    } else if (Q.kpd_leader == "Thälmann") {
        if (Q.kpd_relation < 40) {
            if (Q.spd_votes >= 30) {
                window.kpd_enemies_spd();
            } else if (Q.weimar_coalition > Q.center_right_coalition) {
                window.kpd_enemies_weimar();
            } else if (Q.spd_votes >= 20) {
                window.kpd_enemies_fascists();
            } else {
                window.kpd_enemies_bourgeois();
            }
        } else {
            if (Q.nsdap_votes >= 20) {
                window.kpd_enemies_nsdap();
            } else if (Q.far_right_coalition > Q.center_right_coalition) {
                window.kpd_enemies_reactionaries();
            } else {
                window.kpd_enemies_bourgeois();
            }
        }
    } else if (Q.kpd_leader == "Conciliators") {
        if (Q.nsdap_votes >= 20) {
            window.kpd_enemies_nsdap();
        } else if (Q.far_right_coalition > Q.right_coalition) {
            window.kpd_enemies_reactionaries();
        } else if (Q.weimar_coalition > Q.right_coalition && Q.kpd_relation < 40) {
            window.kpd_enemies_weimar();
        } else {
            window.kpd_enemies_bourgeois();
        }
    } else if (Q.kpd_leader == "Brandlerites") {
        if (Q.nsdap_votes >= 10) {
            window.kpd_enemies_nsdap();
        } else if (Q.far_right_coalition > Q.center_right_coalition) {
            window.kpd_enemies_reactionaries();
        } else {
            window.kpd_enemies_bourgeois();
        }
    }
};

window.kpd_enemies_weimar = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.kpd_enemies = "weimar";

    Q.kpd_relation -= 10;
    Q.ddp_kpd_relation -= 10;
    Q.z_kpd_relation -= 10;

    Q.workers_spd -= 2;
    Q.workers_ddp -= 2;
    Q.workers_z -= 2;
    Q.unemployed_spd -= 2;
    Q.unemployed_ddp -= 2;
    Q.unemployed_z -= 2;

    Q.kpd_weddinger_strength += 5;
    Q.kpd_stalinist_strength += 5;

    Q.kpd_brandlerite_dissent += 5;
};

window.kpd_enemies_spd = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.kpd_enemies = "spd";

    Q.kpd_relation -= 15;

    Q.workers_spd -= 3;
    Q.unemployed_spd -= 4;

    Q.kpd_stalinist_strength += 5;
    
    Q.kpd_conciliator_dissent += 5;
    Q.kpd_brandlerite_dissent += 5;
};

window.kpd_enemies_nsdap = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.kpd_enemies = "nsdap";

    Q.kpd_nazi_urgency += 1;

    Q.nsdap_kpd_relation -= 15;

    Q.workers_nsdap -= 3;
    Q.unemployed_nsdap -= 4;

    Q.kpd_brandlerite_strength += 5;

    Q.kpd_weddinger_dissent += 5;
    Q.kpd_stalinist_dissent += 5;
    Q.kpd_brandlerite_dissent -= 5;
};

window.kpd_enemies_fascists = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.kpd_enemies = "fascists";

    Q.kpd_relation -= 10;
    Q.nsdap_kpd_relation -= 10;

    Q.workers_spd -= 2;
    Q.unemployed_spd -= 2;
    Q.workers_nsdap -= 3;
    Q.unemployed_nsdap -= 3;
    
    Q.kpd_stalinist_strength += 5;
    
    Q.kpd_brandlerite_dissent += 5;
};

window.kpd_enemies_bourgeois = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.kpd_enemies = "bourgeois";

    Q.ddp_kpd_relation -= 10;
    Q.z_kpd_relation -= 10;
    Q.dvp_kpd_relation -= 10;

    Q.workers_ddp -= 2;
    Q.workers_z -= 2;
    Q.workers_dvp -= 2;
    Q.unemployed_ddp -= 2;
    Q.unemployed_z -= 2;
    Q.unemployed_dvp -= 2;

    Q.kpd_conciliator_strength += 5;
    Q.kpd_weddinger_dissent -= 5;
};

window.kpd_enemies_reactionaries = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.kpd_enemies = "reactionaries";

    Q.dnvp_kpd_relation -= 10;
    Q.nsdap_kpd_relation -= 10;

    Q.workers_dnvp -= 2;
    Q.unemployed_dnvp -= 2;
    Q.workers_nsdap -= 3;
    Q.unemployed_nsdap -= 3;

    Q.kpd_brandlerite_strength += 5;
    
    Q.kpd_weddinger_dissent += 5;
    Q.kpd_brandlerite_dissent -= 5;
};