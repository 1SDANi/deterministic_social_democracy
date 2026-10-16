window.labor_balance = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.strike_term_seen = 1;
    Q.strike_term_seen_post_timer = 1;

    Q.labor_affairs_timer = 6;
    Q.labor_affairs_post_timer = 1;

    if (Q.kpd_in_government) {
        window.labor_balance_kpd_reaction();
    }

    if (Q.labor_minister_party == "SPD") {
        window.labor_balance_spd_action();
    } if (Q.spd_in_government) {
        window.labor_balance_spd_reaction();
    }

    if (Q.labor_minister_party == Q.ddp_name) {
        window.labor_balance_ddp_action();
    } else if (Q.ddp_in_government && !Q.lvp_formed) {
        window.labor_balance_ddp_reaction();
    }

    if (Q.labor_minister_party == "LVP") {
        window.labor_balance_lvp_action();
    } else if (Q.ddp_in_government && Q.lvp_formed) {
        window.labor_balance_lvp_reaction();
    }

    if (Q.labor_minister_party == Q.z_party_name) {
        window.labor_balance_z_action();
    } else if (Q.z_in_government) {
        window.labor_balance_z_reaction();
    }

    if (Q.labor_minister_party == "DVP") {
        window.labor_balance_dvp_reaction();
    } else if (Q.dvp_in_government && !Q.lvp_formed) {
        window.labor_balance_dvp_reaction();
    }

    if (Q.labor_minister_party == "KVP") {
        window.labor_balance_kvp_action();
    } else if (Q.kvp_in_government) {
        window.labor_balance_kvp_reaction();
    }

    if (Q.labor_minister_party == "DNVP") {
        window.labor_balance_dnvp_action();
    } else if (Q.dnvp_in_government) {
        window.labor_balance_dnvp_reaction();
    }

    
    if (Q.dnf_in_government) {
        window.labor_balance_dnf_reaction();
    }

    Q.strike_term_seen += 1;
    Q.ddp_cohesion += 1
    Q.ddp_left += 1;
    Q.ddp_relation += 4;
};

window.labor_balance_kpd_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kpd_weddinger_dissent += 7;
    Q.kpd_stalinist_dissent += 6;
    Q.kpd_conciliator_dissent += 5;
    Q.kpd_brandlerite_dissent += 4;

    Q.workers_kpd -= 1;

    kpd_coalition_dissent += 1;
};

window.labor_balance_spd_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.labor_dissent += 4;
    
    Q.workers_spd -= 2;

    Q.kpd_relation -= 5;

    Q.labor_goal_spd_peoples += 1;
};

window.labor_balance_spd_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.labor_dissent += 2;
    
    Q.workers_spd -= 1;

    Q.kpd_relation -= 3;
};

window.labor_balance_ddp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_liberal_strength += 2;
    
    Q.ddp_liberal_dissent -= 2;

    Q.ddp_labor_dissent += 1;
    Q.ddp_business_dissent += 1;

    Q.ddp_z_relation += 2;
    Q.ddp_dvp_relation += 2;
    Q.ddp_kvp_relation += 2;

    Q.ddp_kpd_relation -= 2;
    
    if (Q.dnf_formed) {
        Q.ddp_dnvp_relation -= 2;
    }
};

window.labor_balance_ddp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_liberal_strength += 1;
    
    Q.ddp_liberal_dissent -= 1;

    Q.ddp_z_relation += 1;
    Q.ddp_dvp_relation += 1;
    Q.ddp_kvp_relation += 1;

    Q.ddp_kpd_relation -= 1;

    if (Q.dnf_formed) {
        Q.ddp_dnvp_relation -= 1;
    }
};

window.labor_balance_lvp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.lvp_liberal_strength += 3;
    
    Q.lvp_liberal_dissent -= 3;

    Q.lvp_labor_dissent += 1;
    Q.lvp_bourgeois_dissent += 1;
    Q.lvp_nationalist_dissent += 1;

    Q.lvp_z_relation += 3;
    Q.lvp_kvp_relation += 2;

    Q.lvp_kpd_relation -= 3;
    
     if (Q.dnf_formed) {
        Q.lvp_dnvp_relation -= 3;
    }
};

window.labor_balance_lvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.lvp_liberal_strength += 1;
    
    Q.lvp_liberal_dissent -= 1;

    Q.lvp_z_relation += 1;
    Q.lvp_kvp_relation += 1;

    Q.lvp_kpd_relation -= 1;

    if (Q.dnf_formed) {
        Q.lvp_dnvp_relation -= 1;
    }
};

window.labor_balance_z_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.z_center_strength += 3;

    Q.z_center_dissent -= 3;

    Q.z_left_dissent += 1;
    Q.z_labor_dissent += 1;
    Q.z_conservative_dissent += 1;

    
    Q.lvp_z_relation += 2;
    Q.ddp_z_relation += 2;
    Q.z_dvp_relation += 2;
    Q.z_kvp_relation += 2;

    if (Q.dnf_formed) {
        Q.lvp_dnvp_relation -= 2;
    }
};

window.labor_balance_z_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.z_center_strength += 1;

    Q.z_center_dissent -= 1;

    Q.lvp_z_relation += 1;
    Q.ddp_z_relation += 1;
    Q.z_dvp_relation += 1;
    Q.z_kvp_relation += 1;

    if (Q.dnf_formed) {
        Q.lvp_dnvp_relation -= 1;
    }
};

window.labor_balance_dvp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dvp_liberal_strength += 2;
    
    Q.dvp_liberal_dissent -= 2;

    Q.dvp_labor_dissent += 2;
    Q.dvp_bourgeois_dissent += 2;
    Q.dvp_nationalist_dissent += 2;

    Q.dvp_z_relation += 2;
    Q.dvp_dvp_relation += 2;
    Q.dvp_kvp_relation += 2;

    Q.dvp_kpd_relation -= 2;

    if (Q.dnf_formed) {
        Q.lvp_dnvp_relation -= 2;
    }
};

window.labor_balance_dvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dvp_liberal_strength += 1;
    
    Q.dvp_liberal_dissent -= 1;

    Q.dvp_labor_dissent += 1;
    Q.dvp_bourgeois_dissent += 1;
    Q.dvp_nationalist_dissent += 1;

    Q.dvp_z_relation += 1;
    Q.dvp_ddp_relation += 1;
    Q.dvp_kvp_relation += 1;

    if (Q.dnf_formed) {
        Q.lvp_dnvp_relation -= 1;
    }
};

window.labor_balance_kvp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kvp_christian_social_strength += 2;

    Q.kvp_nationalist_strength -= 2;

    Q.kvp_christian_social_dissent -= 2;
    Q.kvp_tory_democratic_dissent -= 2;
    Q.kvp_volkskonservativ_dissent -= 2;

    Q.kvp_nationalist_dissent += 2;

    Q.ddp_kvp_relation += 2;
    Q.lvp_kvp_relation += 2;
    Q.z_kvp_relation += 2;
    Q.dvp_kvp_relation += 2;
    
    Q.kvp_dnvp_relation -= 2;
}

window.labor_balance_kvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kvp_christian_social_strength += 1;

    Q.kvp_nationalist_strength -= 1;

    Q.kvp_christian_social_dissent -= 1;
    Q.kvp_tory_democratic_dissent -= 1;
    Q.kvp_volkskonservativ_dissent -= 1;

    Q.kvp_nationalist_dissent += 1;

    Q.ddp_kvp_relation += 1;
    Q.lvp_kvp_relation += 1;
    Q.z_kvp_relation += 1;
    Q.dvp_kvp_relation += 1;

    Q.kvp_dnvp_relation -= 1;
}

window.labor_balance_dnvp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dnvp_christian_social_strength += 2;

    Q.dnvp_authoritarian_strength -= 2;

    Q.dnvp_christian_social_dissent -= 2;
    Q.dnvp_volkskonservativ_dissent -= 2;

    Q.dnvp_agrarian_dissent += 2;
    Q.dnvp_authoritarian_dissent += 2;
};

window.labor_balance_dnvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dnvp_christian_social_strength += 1;

    Q.dnvp_authoritarian_strength -= 1;

    Q.dnvp_christian_social_dissent -= 1;
    Q.dnvp_volkskonservativ_dissent -= 1;

    Q.dnvp_agrarian_dissent += 1;
    Q.dnvp_authoritarian_dissent += 1;
};

window.labor_balance_dnf_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dnf_paramilitary_dissent += 2;
    Q.dnf_volkisch_dissent += 2;

    Q.ddp_dnvp_relation -= 2;
    Q.dvp_dnvp_relation -= 2;
    Q.lvp_dnvp_relation -= 2;
    Q.z_dnvp_relation -= 2;
    Q.kvp_dnvp_relation -= 2;
};