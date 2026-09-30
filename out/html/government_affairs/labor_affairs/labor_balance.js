window.labor_balance = function() {
    labor_affairs_seen = 1;

    
    if (dendryUI.kpd_in_government) {
        window.labor_balance_kpd_reaction();
    }

    if (dendryUI.labor_minister_party == "SPD") {
        window.labor_balance_spd_action();
    } if (dendryUI.spd_in_government) {
        window.labor_balance_spd_reaction();
    }

    if (dendryUI.labor_minister_party == dendryUI.ddp_name) {
        window.labor_balance_ddp_action();
    } else if (dendryUI.ddp_in_government && !dendryUI.lvp_formed) {
        window.labor_balance_ddp_reaction();
    }

    if (dendryUI.labor_minister_party == "LVP") {
        window.labor_balance_lvp_action();
    } else if (dendryUI.ddp_in_government && dendryUI.lvp_formed) {
        window.labor_balance_lvp_reaction();
    }

    if (dendryUI.labor_minister_party == dendryUI.z_party_name) {
        window.labor_balance_z_action();
    } else if (dendryUI.z_in_government) {
        window.labor_balance_z_reaction();
    }

    if (dendryUI.labor_minister_party == "DVP") {
        window.labor_balance_dvp_reaction();
    } else if (dendryUI.dvp_in_government && !dendryUI.lvp_formed) {
        window.labor_balance_dvp_reaction();
    }

    if (dendryUI.labor_minister_party == "KVP") {
        window.labor_balance_kvp_action();
    } else if (kvp_in_government) {
        window.labor_balance_kvp_reaction();
    }

    if (dendryUI.labor_minister_party == "DNVP") {
        window.labor_balance_dnvp_action();
    } else if (dendryUI.dnvp_in_government) {
        window.labor_balance_dnvp_reaction();
    }

    
    if (dendryUI.dnf_in_government) {
        window.labor_balance_dnf_reaction();
    }

    dendryUI.strike_term_seen += 1;
    dendryUI.ddp_cohesion += 1
    dendryUI.ddp_left += 1;
    dendryUI.ddp_relation += 4;
};

window.labor_balance_kpd_reaction = function() {
    dendryUI.kpd_weddinger_dissent += 7;
    dendryUI.kpd_stalinist_dissent += 6;
    dendryUI.kpd_conciliator_dissent += 5;
    dendryUI.kpd_brandlerite_dissent += 4;

    dendryUI.workers_kpd -= 1;

    kpd_coalition_dissent += 1;
};

window.labor_balance_spd_action = function() {
    dendryUI.labor_dissent += 4;
    
    dendryUI.workers_spd -= 2;

    dendryUI.kpd_relation -= 5;

    dendryUI.labor_goal_spd_peoples += 1;
};

window.labor_balance_spd_reaction = function() {
    dendryUI.labor_dissent += 2;
    
    dendryUI.workers_spd -= 1;

    dendryUI.kpd_relation -= 3;
};

window.labor_balance_ddp_action = function() {
    dendryUI.ddp_liberal_strength += 2;
    
    dendryUI.ddp_liberal_dissent -= 2;

    dendryUI.ddp_labor_dissent += 1;
    dendryUI.ddp_business_dissent += 1;

    dendryUI.ddp_z_relation += 2;
    dendryUI.ddp_dvp_relation += 2;
    dendryUI.ddp_kvp_relation += 2;

    dendryUI.ddp_kpd_relation -= 2;
    
    if (dendryUI.dnf_formed) {
        dendryUI.ddp_dnvp_relation -= 2;
    }
};

window.labor_balance_ddp_reaction = function() {
    dendryUI.ddp_liberal_strength += 1;
    
    dendryUI.ddp_liberal_dissent -= 1;

    dendryUI.ddp_z_relation += 1;
    dendryUI.ddp_dvp_relation += 1;
    dendryUI.ddp_kvp_relation += 1;

    dendryUI.ddp_kpd_relation -= 1;

    if (dendryUI.dnf_formed) {
        dendryUI.ddp_dnvp_relation -= 1;
    }
};

window.labor_balance_lvp_action = function() {
    dendryUI.lvp_liberal_strength += 3;
    
    dendryUI.lvp_liberal_dissent -= 3;

    dendryUI.lvp_labor_dissent += 1;
    dendryUI.lvp_bourgeois_dissent += 1;
    dendryUI.lvp_nationalist_dissent += 1;

    dendryUI.lvp_z_relation += 3;
    dendryUI.lvp_kvp_relation += 2;

    dendryUI.lvp_kpd_relation -= 3;
    
     if (dendryUI.dnf_formed) {
        dendryUI.lvp_dnvp_relation -= 3;
    }
};

window.labor_balance_lvp_reaction = function() {
    dendryUI.lvp_liberal_strength += 1;
    
    dendryUI.lvp_liberal_dissent -= 1;

    dendryUI.lvp_z_relation += 1;
    dendryUI.lvp_kvp_relation += 1;

    dendryUI.lvp_kpd_relation -= 1;

    if (dendryUI.dnf_formed) {
        dendryUI.lvp_dnvp_relation -= 1;
    }
};

window.labor_balance_z_action = function() {
    dendryUI.z_center_strength += 3;

    dendryUI.z_center_dissent -= 3;

    dendryUI.z_left_dissent += 1;
    dendryUI.z_labor_dissent += 1;
    dendryUI.z_conservative_dissent += 1;

    
    dendryUI.lvp_z_relation += 2;
    dendryUI.ddp_z_relation += 2;
    dendryUI.z_dvp_relation += 2;
    dendryUI.z_kvp_relation += 2;

    if (dendryUI.dnf_formed) {
        dendryUI.lvp_dnvp_relation -= 2;
    }
};

window.labor_balance_z_reaction = function() {
    dendryUI.z_center_strength += 1;

    dendryUI.z_center_dissent -= 1;

    dendryUI.lvp_z_relation += 1;
    dendryUI.ddp_z_relation += 1;
    dendryUI.z_dvp_relation += 1;
    dendryUI.z_kvp_relation += 1;

    if (dendryUI.dnf_formed) {
        dendryUI.lvp_dnvp_relation -= 1;
    }
};

window.labor_balance_dvp_action = function() {
    dendryUI.dvp_liberal_strength += 2;
    
    dendryUI.dvp_liberal_dissent -= 2;

    dendryUI.dvp_labor_dissent += 2;
    dendryUI.dvp_bourgeois_dissent += 2;
    dendryUI.dvp_nationalist_dissent += 2;

    dendryUI.dvp_z_relation += 2;
    dendryUI.dvp_dvp_relation += 2;
    dendryUI.dvp_kvp_relation += 2;

    dendryUI.dvp_kpd_relation -= 2;

    if (dendryUI.dnf_formed) {
        dendryUI.lvp_dnvp_relation -= 2;
    }
};

window.labor_balance_dvp_reaction = function() {
    dendryUI.dvp_liberal_strength += 1;
    
    dendryUI.dvp_liberal_dissent -= 1;

    dendryUI.dvp_labor_dissent += 1;
    dendryUI.dvp_bourgeois_dissent += 1;
    dendryUI.dvp_nationalist_dissent += 1;

    dendryUI.dvp_z_relation += 1;
    dendryUI.dvp_ddp_relation += 1;
    dendryUI.dvp_kvp_relation += 1;

    if (dendryUI.dnf_formed) {
        dendryUI.lvp_dnvp_relation -= 1;
    }
};

window.labor_balance_kvp_action = function() {
    dendryUI.kvp_christian_social_strength += 2;

    dendryUI.kvp_nationalist_strength -= 2;

    dendryUI.kvp_christian_social_dissent -= 2;
    dendryUI.kvp_tory_democratic_dissent -= 2;
    dendryUI.kvp_volkskonservativ_dissent -= 2;

    dendryUI.kvp_nationalist_dissent += 2;

    dendryUI.ddp_kvp_relation += 2;
    dendryUI.lvp_kvp_relation += 2;
    dendryUI.z_kvp_relation += 2;
    dendryUI.dvp_kvp_relation += 2;
    
    dendryUI.kvp_dnvp_relation -= 2;
}

window.labor_balance_kvp_reaction = function() {
    dendryUI.kvp_christian_social_strength += 1;

    dendryUI.kvp_nationalist_strength -= 1;

    dendryUI.kvp_christian_social_dissent -= 1;
    dendryUI.kvp_tory_democratic_dissent -= 1;
    dendryUI.kvp_volkskonservativ_dissent -= 1;

    dendryUI.kvp_nationalist_dissent += 1;

    dendryUI.ddp_kvp_relation += 1;
    dendryUI.lvp_kvp_relation += 1;
    dendryUI.z_kvp_relation += 1;
    dendryUI.dvp_kvp_relation += 1;

    dendryUI.kvp_dnvp_relation -= 1;
}

window.labor_balance_dnvp_action = function() {
    dendryUI.dnvp_christian_social_strength += 2;

    dendryUI.dnvp_authoritarian_strength -= 2;

    dendryUI.dnvp_christian_social_dissent -= 2;
    dendryUI.dnvp_volkskonservativ_dissent -= 2;

    dendryUI.dnvp_agrarian_dissent += 2;
    dendryUI.dnvp_authoritarian_dissent += 2;
};

window.labor_balance_dnvp_reaction = function() {
    dendryUI.dnvp_christian_social_strength += 1;

    dendryUI.dnvp_authoritarian_strength -= 1;

    dendryUI.dnvp_christian_social_dissent -= 1;
    dendryUI.dnvp_volkskonservativ_dissent -= 1;

    dendryUI.dnvp_agrarian_dissent += 1;
    dendryUI.dnvp_authoritarian_dissent += 1;
};

window.labor_balance_dnf_reaction = function() {
    dendryUI.dnf_paramilitary_dissent += 2;
    dendryUI.dnf_volkisch_dissent += 2;

    dendryUI.ddp_dnvp_relation -= 2;
    dendryUI.dvp_dnvp_relation -= 2;
    dendryUI.lvp_dnvp_relation -= 2;
    dendryUI.z_dnvp_relation -= 2;
    dendryUI.kvp_dnvp_relation -= 2;
};