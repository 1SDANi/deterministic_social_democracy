window.support_employers = function() {
    dendryUI.labor_affairs_seen = 1;

    if (dendryUI.kpd_in_government) {
        window.support_employers_kpd_reaction();
    } else {
        dendryUI.workers_kpd += 3;
    }

    if (dendryUI.labor_minister_party == "SPD") {
        window.support_employers_spd_action();
    } else if (dendryUI.spd_in_government) {
        window.support_employers_spd_reaction();
    }

    
    if (dendryUI.labor_minister_party == dendryUI.ddp_name) {
        window.support_employers_ddp_action();
    } else if (dendryUI.ddp_in_government && !dendryUI.lvp_formed) {
        window.support_employers_ddp_reaction();
    }

    if (dendryUI.labor_minister_party == "LVP") {
        window.support_employers_lvp_action();
    } else if (dendryUI.ddp_in_government && dendryUI.lvp_formed) {
        window.support_employers_lvp_reaction();
    }
    
    if (dendryUI.labor_minister_party == dendryUI.z_party_name) {
        window.support_employers_z_action();
    } else if (dendryUI.z_in_government) {
        window.support_employers_z_reaction();
    }

    if (dendryUI.labor_minister_party == "DVP") {
        window.support_employers_dvp_action();
    } else if (dendryUI.dvp_in_government && !dendryUI.lvp_formed) {
        window.support_employers_dvp_reaction();
    }

    if (dendryUI.labor_minister_party == "KVP") {
        window.support_employers_kvp_action();
    } else if (dendryUI.kvp_in_government) {
        window.support_employers_kvp_reaction();
    }

    if (dendryUI.labor_minister_party == "DNVP") {
        window.support_employers_dnvp_action();
    } else if (dendryUI.dnvp_in_government) {
        window.support_employers_dnvp_reaction();
    }

    if (dendryUI.labor_minister_party == "DNF") {
        window.support_employers_dnf_action();
    } else if (dendryUI.dnf_in_government) {
        window.support_employers_dnf_reaction();
    }


    if (capital_strike_progress > 1) {
        capital_strike_progress -= 1
    }

    if (capital_strike_progress > 8) {
        capital_strike_progress -= 1
    }

    if (coalition_dissent > 0 && (dendryUI.z_in_government && dendryUI.labor_minister_party != dendryUI.z_party_name) || dendryUI.dvp_in_government || dendryUI.dnvp_in_government || dendryUI.bvp_in_government || dendryUI.kvp_in_government || dendryUI.ddp_in_government) {
        dendryUI.coalition_dissent -= 1;
    }

    pro_labor -= 1;
    strike_term_seen += 1;
    dvp_left += 1;
    ddp_right += 1;
    ddp_cohesion -= 0.5;
    lvp_left += 1;
};

window.support_employers_kpd_reaction = function() {
    dendryUI.kpd_weddinger_dissent += 8;
    dendryUI.kpd_stalinist_dissent += 7;
    dendryUI.kpd_conciliator_dissent += 6;
    dendryUI.kpd_brandlerite_dissent += 5;

    dendryUI.workers_kpd -= 2;

    kpd_coalition_dissent += 1;
};

window.support_employers_spd_action = function() {
    dendryUI.labor_dissent += 8;

    dendryUI.workers_spd -= 3;

    dendryUI.kpd_relation -= 8;
    dendryUI.dvp_relation += 5;
    dendryUI.lvp_relation += 5;
    dendryUI.z_relation += 5;
    dendryUI.ddp_relation += 4;

    dendryUI.goal_spd_cancel += 1;
    dendryUI.labor_goal_spd_peoples += 1;
};

window.support_employers_spd_reaction = function() {
    dendryUI.labor_dissent += 4;

    dendryUI.workers_spd -= 1;

    dendryUI.kpd_relation -= 4;
    dendryUI.dvp_relation += 3;
    dendryUI.lvp_relation += 3;
    dendryUI.z_relation += 3;
    dendryUI.ddp_relation += 2;
};

window.support_employers_ddp_action = function() {
    dendryUI.ddp_business_strength += 2;

    dendryUI.ddp_labor_strength -= 2;

    dendryUI.ddp_business_dissent -= 2;
    
    dendryUI.ddp_labor_dissent += 2;

    dendryUI.workers_ddp -= 2;

    dendryUI.ddp_kpd_relation -= 4;
    dendryUI.ddp_z_relation += 3;
    dendryUI.ddp_dvp_relation += 3;
    dendryUI.ddp_dnvp_relation += 3;
};

window.support_employers_ddp_reaction = function() {
    dendryUI.ddp_business_strength += 1;

    dendryUI.ddp_labor_strength -= 1;

    dendryUI.ddp_business_dissent -= 1;
    
    dendryUI.ddp_labor_dissent += 1;

    dendryUI.workers_ddp -= 1;

    dendryUI.ddp_kpd_relation -= 2;
    dendryUI.ddp_z_relation += 1;
    dendryUI.ddp_dvp_relation += 1;
    dendryUI.ddp_dnvp_relation += 1;
};

window.support_employers_lvp_action = function() {
    dendryUI.lvp_bourgeois_strength += 3;

    dendryUI.lvp_labor_strength -= 3;

    dendryUI.lvp_bourgeois_dissent -= 3;
    dendryUI.lvp_nationalist_dissent -= 3;
    
    dendryUI.lvp_labor_dissent += 3;

    dendryUI.workers_lvp -= 2;

    dendryUI.ddp_kpd_relation -= 4;
    dendryUI.ddp_z_relation += 3;
    dendryUI.ddp_dvp_relation += 3;
    dendryUI.ddp_dnvp_relation += 3;
};

window.support_employers_lvp_reaction = function() {
    dendryUI.lvp_bourgeois_strength += 1;

    dendryUI.lvp_labor_strength -= 1;

    dendryUI.lvp_bourgeois_dissent -= 1;
    dendryUI.lvp_nationalist_dissent -= 1;

    dendryUI.lvp_labor_dissent += 1;

    dendryUI.workers_lvp -= 1;

    dendryUI.ddp_kpd_relation -= 2;
    dendryUI.ddp_z_relation += 1;
    dendryUI.ddp_dvp_relation += 1;
    dendryUI.ddp_dnvp_relation += 1;
};

window.support_employers_z_action = function() {
    dendryUI.z_conservative_strength += 3;

    dendryUI.z_left_strength -= 3;

    dendryUI.z_conservative_dissent -= 3;

    dendryUI.z_labor_dissent += 3;
    dendryUI.z_left_dissent += 3;

    dendryUI.workers_z -= 3;

    dendryUI.z_kpd_relation += 2;
    dendryUI.z_dvp_relation += 1;
    dendryUI.ddp_z_relation += 1;
    dendryUI.z_dnvp_relation += 1;
};

window.support_employers_z_reaction = function() {
    dendryUI.z_conservative_strength += 1;

    dendryUI.z_left_strength -= 1;

    dendryUI.z_conservative_dissent -= 1;

    dendryUI.z_labor_dissent += 1;
    dendryUI.z_left_dissent += 1;

    dendryUI.workers_z -= 1;
};

window.support_employers_dvp_action = function() {
    dendryUI.dvp_bourgeois_strength += 2;

    dendryUI.dvp_labor_strength -= 2;

    dendryUI.dvp_bourgeois_dissent -= 2;
    dendryUI.dvp_nationalist_dissent -= 2;
    
    dendryUI.dvp_labor_dissent += 2;

    dendryUI.workers_dvp -= 1;

    dendryUI.dvp_z_relation += 3;
    dendryUI.dvp_dvp_relation += 3;
    dendryUI.dvp_dnvp_relation += 3;
};

window.support_employers_dvp_reaction = function() {
    dendryUI.dvp_bourgeois_strength += 1;

    dendryUI.dvp_labor_strength -= 1;

    dendryUI.dvp_bourgeois_dissent -= 1;
    dendryUI.dvp_nationalist_dissent -= 1;
    
    dendryUI.dvp_labor_dissent += 1;

    dendryUI.dvp_z_relation += 1;
    dendryUI.dvp_dvp_relation += 1;
    dendryUI.dvp_dnvp_relation += 1;
};

window.support_employers_kvp_action = function() {
    dendryUI.kvp_volkskonservativ_strength += 2;

    dendryUI.kvp_christian_social_strength -= 2;

    dendryUI.kvp_volkskonservativ_dissent -= 2;
    dendryUI.kvp_nationalist_dissent -= 2;
    
    dendryUI.kvp_christian_social_dissent -= 2;

    dendryUI.workers_kvp -= 1;

    dendryUI.ddp_kvp_relation += 1;
    dendryUI.dvp_kvp_relation += 1;
    dendryUI.z_kvp_relation += 1;
    dendryUI.kvp_dnvp_relation += 1;
};

window.support_employers_kvp_reaction = function() {
    dendryUI.kvp_volkskonservativ_strength += 1;

     dendryUI.kvp_christian_social_strength -= 1;

     dendryUI.kvp_volkskonservativ_dissent -= 1;
     dendryUI.kvp_nationalist_dissent -= 1;
     
     dendryUI.kvp_christian_social_dissent -= 1;
};

window.support_employers_dnvp_action = function() {
    dendryUI.dnvp_volkskonservativ_strength -= 2;

    dendryUI.dnvp_authoritarian_strength += 2;

    dendryUI.dnvp_volkskonservativ_dissent -= 3
    dendryUI.dnvp_agrarian_dissent -= 3;
    dendryUI.dnvp_authoritarian_dissent -= 3;
    
    dendryUI.dnvp_authoritarian_dissent += 2;

    dendryUI.workers_dnvp -= 1;

    dendryUI.ddp_dnvp_relation += 1;
    dendryUI.dvp_dnvp_relation += 1;
    dendryUI.z_dnvp_relation += 1;
    dendryUI.kvp_dnvp_relation += 1;
};

window.support_employers_dnvp_reaction = function() {
    dendryUI.kvp_volkskonservativ_strength += 1;

     dendryUI.kvp_christian_social_strength -= 1;

     dendryUI.kvp_volkskonservativ_dissent -= 1;
     
     dendryUI.kvp_christian_social_dissent -= 1;
};

window.support_employers_dnf_action = function() {
    dendryUI.dnf_authoritarian_strength += 4;

    dendryUI.dnf_paramilitary_strength -= 4;

    dendryUI.dnf_authoritarian_dissent -= 4;
    dendryUI.dnf_nationalist_dissent -= 4;
};

window.support_employers_dnf_reaction = function() {
    dendryUI.dnf_authoritarian_strength += 2;

    dendryUI.dnf_paramilitary_strength -= 2;

    dendryUI.dnf_authoritarian_dissent -= 2;
    dendryUI.dnf_nationalist_dissent -= 2;
};