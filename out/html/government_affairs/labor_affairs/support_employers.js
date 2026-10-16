window.support_employers = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.strike_term_seen = 1;
    Q.strike_term_seen_post_timer = 1;

    Q.labor_affairs_timer = 6;
    Q.labor_affairs_post_timer = 1;

    if (Q.kpd_in_government) {
        window.support_employers_kpd_reaction();
    } else {
        Q.workers_kpd += 3;
    }

    if (Q.labor_minister_party == "SPD") {
        window.support_employers_spd_action();
    } else if (Q.spd_in_government) {
        window.support_employers_spd_reaction();
    }

    
    if (Q.labor_minister_party == Q.ddp_name) {
        window.support_employers_ddp_action();
    } else if (Q.ddp_in_government && !Q.lvp_formed) {
        window.support_employers_ddp_reaction();
    }

    if (Q.labor_minister_party == "LVP") {
        window.support_employers_lvp_action();
    } else if (Q.ddp_in_government && Q.lvp_formed) {
        window.support_employers_lvp_reaction();
    }
    
    if (Q.labor_minister_party == Q.z_party_name) {
        window.support_employers_z_action();
    } else if (Q.z_in_government) {
        window.support_employers_z_reaction();
    }

    if (Q.labor_minister_party == "DVP") {
        window.support_employers_dvp_action();
    } else if (Q.dvp_in_government && !Q.lvp_formed) {
        window.support_employers_dvp_reaction();
    }

    if (Q.labor_minister_party == "KVP") {
        window.support_employers_kvp_action();
    } else if (Q.kvp_in_government) {
        window.support_employers_kvp_reaction();
    }

    if (Q.labor_minister_party == "DNVP") {
        window.support_employers_dnvp_action();
    } else if (Q.dnvp_in_government) {
        window.support_employers_dnvp_reaction();
    }

    if (Q.labor_minister_party == "DNF") {
        window.support_employers_dnf_action();
    } else if (Q.dnf_in_government) {
        window.support_employers_dnf_reaction();
    }


    if (capital_strike_progress > 1) {
        capital_strike_progress -= 1
    }

    if (capital_strike_progress > 8) {
        capital_strike_progress -= 1
    }

    if (coalition_dissent > 0 && (Q.z_in_government && Q.labor_minister_party != Q.z_party_name) || Q.dvp_in_government || Q.dnvp_in_government || Q.bvp_in_government || Q.kvp_in_government || Q.ddp_in_government) {
        Q.coalition_dissent -= 1;
    }

    pro_labor -= 1;
    strike_term_seen += 1;
    dvp_left += 1;
    ddp_right += 1;
    ddp_cohesion -= 0.5;
    lvp_left += 1;
};

window.support_employers_kpd_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kpd_weddinger_dissent += 8;
    Q.kpd_stalinist_dissent += 7;
    Q.kpd_conciliator_dissent += 6;
    Q.kpd_brandlerite_dissent += 5;

    Q.workers_kpd -= 2;

    kpd_coalition_dissent += 1;
};

window.support_employers_spd_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.labor_dissent += 8;

    Q.workers_spd -= 3;

    Q.kpd_relation -= 8;
    Q.dvp_relation += 5;
    Q.lvp_relation += 5;
    Q.z_relation += 5;
    Q.ddp_relation += 4;

    Q.goal_spd_cancel += 1;
    Q.labor_goal_spd_peoples += 1;
};

window.support_employers_spd_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.labor_dissent += 4;

    Q.workers_spd -= 1;

    Q.kpd_relation -= 4;
    Q.dvp_relation += 3;
    Q.lvp_relation += 3;
    Q.z_relation += 3;
    Q.ddp_relation += 2;
};

window.support_employers_ddp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_business_strength += 2;

    Q.ddp_labor_strength -= 2;

    Q.ddp_business_dissent -= 2;
    
    Q.ddp_labor_dissent += 2;

    Q.workers_ddp -= 2;

    Q.ddp_kpd_relation -= 4;
    Q.ddp_z_relation += 3;
    Q.ddp_dvp_relation += 3;
    Q.ddp_dnvp_relation += 3;
};

window.support_employers_ddp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_business_strength += 1;

    Q.ddp_labor_strength -= 1;

    Q.ddp_business_dissent -= 1;
    
    Q.ddp_labor_dissent += 1;

    Q.workers_ddp -= 1;

    Q.ddp_kpd_relation -= 2;
    Q.ddp_z_relation += 1;
    Q.ddp_dvp_relation += 1;
    Q.ddp_dnvp_relation += 1;
};

window.support_employers_lvp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.lvp_bourgeois_strength += 3;

    Q.lvp_labor_strength -= 3;

    Q.lvp_bourgeois_dissent -= 3;
    Q.lvp_nationalist_dissent -= 3;
    
    Q.lvp_labor_dissent += 3;

    Q.workers_lvp -= 2;

    Q.ddp_kpd_relation -= 4;
    Q.ddp_z_relation += 3;
    Q.ddp_dvp_relation += 3;
    Q.ddp_dnvp_relation += 3;
};

window.support_employers_lvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.lvp_bourgeois_strength += 1;

    Q.lvp_labor_strength -= 1;

    Q.lvp_bourgeois_dissent -= 1;
    Q.lvp_nationalist_dissent -= 1;

    Q.lvp_labor_dissent += 1;

    Q.workers_lvp -= 1;

    Q.ddp_kpd_relation -= 2;
    Q.ddp_z_relation += 1;
    Q.ddp_dvp_relation += 1;
    Q.ddp_dnvp_relation += 1;
};

window.support_employers_z_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.z_conservative_strength += 3;

    Q.z_left_strength -= 3;

    Q.z_conservative_dissent -= 3;

    Q.z_labor_dissent += 3;
    Q.z_left_dissent += 3;

    Q.workers_z -= 3;

    Q.z_kpd_relation += 2;
    Q.z_dvp_relation += 1;
    Q.ddp_z_relation += 1;
    Q.z_dnvp_relation += 1;
};

window.support_employers_z_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.z_conservative_strength += 1;

    Q.z_left_strength -= 1;

    Q.z_conservative_dissent -= 1;

    Q.z_labor_dissent += 1;
    Q.z_left_dissent += 1;

    Q.workers_z -= 1;
};

window.support_employers_dvp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dvp_bourgeois_strength += 2;

    Q.dvp_labor_strength -= 2;

    Q.dvp_bourgeois_dissent -= 2;
    Q.dvp_nationalist_dissent -= 2;
    
    Q.dvp_labor_dissent += 2;

    Q.workers_dvp -= 1;

    Q.dvp_z_relation += 3;
    Q.dvp_dvp_relation += 3;
    Q.dvp_dnvp_relation += 3;
};

window.support_employers_dvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dvp_bourgeois_strength += 1;

    Q.dvp_labor_strength -= 1;

    Q.dvp_bourgeois_dissent -= 1;
    Q.dvp_nationalist_dissent -= 1;
    
    Q.dvp_labor_dissent += 1;

    Q.dvp_z_relation += 1;
    Q.dvp_dvp_relation += 1;
    Q.dvp_dnvp_relation += 1;
};

window.support_employers_kvp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kvp_volkskonservativ_strength += 2;

    Q.kvp_christian_social_strength -= 2;

    Q.kvp_volkskonservativ_dissent -= 2;
    Q.kvp_nationalist_dissent -= 2;
    
    Q.kvp_christian_social_dissent -= 2;

    Q.workers_kvp -= 1;

    Q.ddp_kvp_relation += 1;
    Q.dvp_kvp_relation += 1;
    Q.z_kvp_relation += 1;
    Q.kvp_dnvp_relation += 1;
};

window.support_employers_kvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kvp_volkskonservativ_strength += 1;

     Q.kvp_christian_social_strength -= 1;

     Q.kvp_volkskonservativ_dissent -= 1;
     Q.kvp_nationalist_dissent -= 1;
     
     Q.kvp_christian_social_dissent -= 1;
};

window.support_employers_dnvp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dnvp_volkskonservativ_strength -= 2;

    Q.dnvp_authoritarian_strength += 2;

    Q.dnvp_volkskonservativ_dissent -= 3
    Q.dnvp_agrarian_dissent -= 3;
    Q.dnvp_authoritarian_dissent -= 3;
    
    Q.dnvp_authoritarian_dissent += 2;

    Q.workers_dnvp -= 1;

    Q.ddp_dnvp_relation += 1;
    Q.dvp_dnvp_relation += 1;
    Q.z_dnvp_relation += 1;
    Q.kvp_dnvp_relation += 1;
};

window.support_employers_dnvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kvp_volkskonservativ_strength += 1;

     Q.kvp_christian_social_strength -= 1;

     Q.kvp_volkskonservativ_dissent -= 1;
     
     Q.kvp_christian_social_dissent -= 1;
};

window.support_employers_dnf_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dnf_authoritarian_strength += 4;

    Q.dnf_paramilitary_strength -= 4;

    Q.dnf_authoritarian_dissent -= 4;
    Q.dnf_nationalist_dissent -= 4;
};

window.support_employers_dnf_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dnf_authoritarian_strength += 2;

    Q.dnf_paramilitary_strength -= 2;

    Q.dnf_authoritarian_dissent -= 2;
    Q.dnf_nationalist_dissent -= 2;
};