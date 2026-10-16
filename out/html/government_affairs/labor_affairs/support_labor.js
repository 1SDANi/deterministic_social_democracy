window.support_labor = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.strike_term_seen = 1;
    Q.strike_term_seen_post_timer = 1;

    Q.labor_affairs_timer = 6;
    Q.labor_affairs_post_timer = 1;

    if (Q.labor_minister_party == "KPD") {
        window.support_labor_kpd_action();
    } else if (Q.kpd_in_government) {
        window.support_labor_kpd_reaction();
    }

    if (Q.labor_minister_party == "SPD") {
        window.support_labor_spd_action();
    } else if (Q.spd_in_government) {
        window.support_labor_spd_reaction();
    }

    if (Q.labor_minister_party == Q.ddp_name) {
        window.support_labor_ddp_action();
    } else if (Q.ddp_in_government && !Q.lvp_formed) {
        window.support_labor_ddp_reaction();
    }

    if (Q.labor_minister_party == "LVP") {
        window.support_labor_lvp_action();
    } else if ((Q.ddp_in_government || Q.dvp_in_government) && Q.lvp_formed) {
        window.support_labor_lvp_reaction();
    }

    if (Q.labor_minister_party == Q.z_party_name) {
        window.support_labor_z_action();
    } else if (Q.z_in_government) {
        window.support_labor_z_reaction();
    }

    if (Q.dvp_in_government && !Q.lvp_formed) {
        window.support_labor_dvp_reaction();
    }

    if (Q.kvp_in_government) {
        window.support_labor_kvp_reaction();
    }

    if (Q.dnvp_in_government) {
        window.support_labor_dnvp_reaction();
    }

    if (Q.dnf_in_government) {
        window.support_labor_dnf_reaction();
    }

    if ((Q.z_in_government && Q.labor_minister_party != Q.z_party_name) || Q.dvp_in_government || Q.dnvp_in_government || Q.bvp_in_government || Q.kvp_in_government || Q.ddp_in_government) {
        Q.coalition_dissent += 1;
    }

    if (Q.unemplyed > 15) {
        Q.capital_strike_progress += 1;
    }

    if (Q.unemplyed > 24) {
        Q.capital_strike_progress += 1;
    }

    Q.inflation += 0.1;
    Q.pro_labor += 1;
    Q.strike_term_seen += 1;
    Q.dvp_right += 1;
    Q.ddp_left += 1;
    Q.ddp_cohesion -= 1;
    Q.lvp_right += 1;
    Q.economic_growth -= 0.1;
};

window.support_labor_kpd_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    if (Q.spd_in_government) {
        window.support_labor_kpd_action_unity();
    } else {
        window.support_labor_kpd_action_solo();
    }
    Q.labor_strength += 5;

    Q.labor_dissent -= 5;
    Q.left_dissent -= 5;

    Q.workers_spd += 6*(1-Q.dissent);

    Q.ddp_kpd_relation -= 2;
    Q.z_kpd_relation -= 2;

    Q.labor_goal_completed += 1;
    Q.labor_goal_spd += 1;
    Q.goal_spd_cancel_peoples += 1;

    if ((Q.dvp_relation <= 30 && !Q.lvp_formed) || (Q.lvp_relation <= 30 && Q.lvp_formed)) {
        Q.capital_strike_progress += 1;
    }
};

window.support_labor_kpd_action_unity = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kpd_brandlerite_strength += 5;
    Q.kpd_conciliator_strength += 5;

    Q.kpd_weddinger_strength -= 5;
    
    Q.kpd_brandlerite_dissent -= 5;
    Q.kpd.kpd_conciliator_dissent -= 5;

    Q.kpd_weddinger_dissent += 5;

    Q.workers_kpd += 6*(1-Q.kpd_dissent);
};

window.support_labor_kpd_action_solo = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kpd_stalinist_strength += 5;

    Q.kpd_weddinger_strength -= 5;
    Q.kpd_brandlerite_strength -= 5;
    
    Q.kpd_stalinist_dissent -= 5;

    Q.kpd_weddinger_dissent += 5;
    Q.kpd_brandlerite_dissent += 5;

    Q.workers_kpd += 6*(1-Q.kpd_dissent);
};

window.support_labor_kpd_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.labor_strength += 3;

    Q.labor_dissent -= 3;
    Q.left_dissent -= 3;

    Q.workers_spd += 3*(1-Q.kpd_dissent);

    Q.dvp_relation -= 2;
    Q.ddp_relation -= 1;
    
    Q.labor_goal_completed += 1;
    Q.labor_goal_spd += 1;
};

window.support_labor_spd_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.labor_strength += 5;

    Q.labor_dissent -= 5;
    Q.left_dissent -= 5;

    Q.workers_spd += 6*(1-Q.dissent);

    Q.dvp_relation -= 4;
    Q.ddp_relation -= 2;

    Q.labor_goal_completed += 1;
    Q.labor_goal_spd += 1;
    Q.goal_spd_cancel_peoples += 1;

    if ((Q.dvp_relation <= 30 && !Q.lvp_formed) || (Q.lvp_relation <= 30 && Q.lvp_formed)) {
        Q.capital_strike_progress += 1;
    }
};

window.support_labor_spd_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.labor_strength += 3;

    Q.labor_dissent -= 3;
    Q.left_dissent -= 3;

    Q.workers_spd += 3*(1-Q.dissent);

    Q.dvp_relation -= 2;
    Q.ddp_relation -= 1;
    
    Q.labor_goal_spd += 1;
};

window.support_labor_ddp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_labor_strength += 4;

    Q.ddp_business_strength -= 4;

    Q.ddp_labor_dissent -= 4;

    Q.ddp_business_dissent += 4;

    Q.workers_ddp += 5*(1-Q.ddp_dissent);

    if ((Q.z_leader == "Wirth" && !(Q.dvp_in_government || Q.dnvp_in_government || Q.nsdap_in_government)) || (Q.z_leader == "Joos" && Q.spd_in_government && Q.peoples_party) || Q.z_leader == "Kaiser") {
        Q.ddp_z_relation -= 1;
    }
    
    Q.ddp_dvp_relation -= 2;
    

    if ((Q.ddp_dvp_relation <= 30 && !Q.lvp_formed)) {
        Q.capital_strike_progress += 1;
    }
};

window.support_labor_ddp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_labor_strength += 2;

    Q.ddp_business_strength -= 2;

    Q.ddp_labor_dissent -= 2;

    Q.ddp_business_dissent += 2;

    Q.workers_ddp += 3*(1-Q.ddp_dissent);

    Q.z_dvp_relation -= 1;
};

window.support_labor_lvp_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.lvp_labor_strength += 3;

    Q.lvp_bourgeois_strength -= 3;

    Q.lvp_labor_dissent -= 3;

    Q.lvp_bourgeois_dissent += 3;
    Q.lvp_nationalist_dissent += 3;

    Q.workers_lvp += 4*(1-Q.lvp_dissent);

    if ((Q.z_leader == "Wirth" && !(Q.dvp_in_government || Q.dnvp_in_government || Q.nsdap_in_government)) || (Q.z_leader == "Joos" && Q.spd_in_government && Q.peoples_party) || Q.z_leader == "Kaiser") {
        Q.ddp_z_relation -= 1;
    }
};

window.support_labor_lvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.lvp_labor_strength += 3;

    Q.lvp_business_strength -= 3;

    Q.lvp_labor_dissent -= 3;

    Q.lvp_bourgeois_dissent += 3;
    Q.lvp_nationalist_dissent += 3;

    Q.workers_lvp += 2*(1-Q.lvp_dissent);
};

window.support_labor_z_action = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.z_left_strength += 3;

    Q.z_conservative_strength -= 3;

    Q.z_labor_dissent -= 3;
    Q.z_left_dissent -= 3;

    Q.z_conservative_dissent += 3;

    Q.workers_z += 5*(1-Q.z_dissent);

    Q.z_kpd_relation += 4;
    Q.z_dvp_relation -= 2;
    Q.ddp_z_relation -= 1;

    if ((Q.z_dvp_relation <= 30 && !Q.lvp_formed) || (Q.lvp_z_relation <= 30 && Q.lvp_formed)) {
        Q.capital_strike_progress += 1;
    }
};

window.support_labor_z_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.z_left_strength += 1;

    Q.z_conservative_strength -= 1;

    Q.z_labor_dissent -= 1;
    Q.z_left_dissent -= 1;

    Q.z_conservative_dissent += 1;

    Q.workers_z += 3*(1-z_dissent);

    Q.z_dvp_relation -= 1;
};

window.support_labor_dvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dvp_labor_strength += 2;

    Q.dvp_industrialist_strength -= 2;

    Q.dvp_labor_dissent -= 2;

    Q.dvp_industrialist_dissent += 2;
    Q.dvp_nationalist_dissent += 2;

    Q.workers_dvp += 1*(1-Q.dvp_dissent);
};

window.support_labor_kvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kvp_christian_social_strength += 1;

    Q.kvp_volkskonservativ_strength -= 1;

    Q.kvp_christian_social_dissent -= 1;

    Q.kvp_volkskonservativ_dissent += 1;
    Q.kvp_nationalist_dissent += 1;

    Q.workers_kvp += 1*(1-Q.kvp_dissent);
};

window.support_labor_dnvp_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dnvp_christian_social_strength += 1;

    Q.dnvp_authoritarian_strength -= 1;

    Q.dnvp_christian_social_dissent -= 1;

    Q.dnvp_volkskonservativ_dissent += 1
    Q.dnvp_agrarian_dissent += 1;
    Q.dnvp_authoritarian_dissent += 1;

    Q.workers_dnvp += 1*(1-Q.dnvp_dissent);
};

window.support_labor_dnf_reaction = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dnf_paramilitary_strength += 2;

    Q.dnf_authoritarian_strength -= 2;

    Q.dnf_paramilitary_dissent -= 2;
    Q.dnf_volkisch_dissent -= 2;

    Q.dnf_authoritarian_dissent += 2;
    Q.dnf_nationalist_dissent += 2;
};