window.support_labor = function() {
    dendryUI.labor_affairs_seen = 1;

    if (dendryUI.labor_minister_party == "KPD") {
        window.support_labor_kpd_action();
    } else if (dendryUI.kpd_in_government) {
        window.support_labor_kpd_reaction();
    }

    if (dendryUI.labor_minister_party == "SPD") {
        window.support_labor_spd_action();
    } else if (dendryUI.spd_in_government) {
        window.support_labor_spd_reaction();
    }

    if (dendryUI.labor_minister_party == dendryUI.ddp_name) {
        window.support_labor_ddp_action();
    } else if (dendryUI.ddp_in_government && !dendryUI.lvp_formed) {
        window.support_labor_ddp_reaction();
    }

    if (dendryUI.labor_minister_party == "LVP") {
        window.support_labor_lvp_action();
    } else if ((dendryUI.ddp_in_government || dendryUI.dvp_in_government) && dendryUI.lvp_formed) {
        window.support_labor_lvp_reaction();
    }

    if (dendryUI.labor_minister_party == dendryUI.z_party_name) {
        window.support_labor_z_action();
    } else if (dendryUI.z_in_government) {
        window.support_labor_z_reaction();
    }

    if (dendryUI.dvp_in_government && !dendryUI.lvp_formed) {
        window.support_labor_dvp_reaction();
    }

    if (dendryUI.kvp_in_government) {
        window.support_labor_kvp_reaction();
    }

    if (dendryUI.dnvp_in_government) {
        window.support_labor_dnvp_reaction();
    }

    if (dendryUI.dnf_in_government) {
        window.support_labor_dnf_reaction();
    }

    if ((dendryUI.z_in_government && dendryUI.labor_minister_party != dendryUI.z_party_name) || dendryUI.dvp_in_government || dendryUI.dnvp_in_government || dendryUI.bvp_in_government || dendryUI.kvp_in_government || dendryUI.ddp_in_government) {
        dendryUI.coalition_dissent += 1;
    }

    if (dendryUI.unemplyed > 15) {
        dendryUI.capital_strike_progress += 1;
    }

    if (dendryUI.unemplyed > 24) {
        dendryUI.capital_strike_progress += 1;
    }

    dendryUI.inflation += 0.1;
    dendryUI.pro_labor += 1;
    dendryUI.strike_term_seen += 1;
    dendryUI.dvp_right += 1;
    dendryUI.ddp_left += 1;
    dendryUI.ddp_cohesion -= 1;
    dendryUI.lvp_right += 1;
    dendryUI.economic_growth -= 0.1;
};

window.support_labor_kpd_action = function() {
    if (dendryUI.spd_in_government) {
        window.support_labor_kpd_action_unity();
    } else {
        window.support_labor_kpd_action_solo();
    }
    dendryUI.labor_strength += 5;

    dendryUI.labor_dissent -= 5;
    dendryUI.left_dissent -= 5;

    dendryUI.workers_spd += 6*(1-dendryUI.dissent);

    dendryUI.ddp_kpd_relation -= 2;
    dendryUI.z_kpd_relation -= 2;

    dendryUI.labor_goal_completed += 1;
    dendryUI.labor_goal_spd += 1;
    dendryUI.goal_spd_cancel_peoples += 1;

    if ((dendryUI.dvp_relation <= 30 && !dendryUI.lvp_formed) || (dendryUI.lvp_relation <= 30 && dendryUI.lvp_formed)) {
        dendryUI.capital_strike_progress += 1;
    }
};

window.support_labor_kpd_action_unity = function() {
    dendryUI.kpd_brandlerite_strength += 5;
    dendryUI.kpd_conciliator_strength += 5;

    dendryUI.kpd_weddinger_strength -= 5;
    
    dendryUI.kpd_brandlerite_dissent -= 5;
    dendryUI.kpd.kpd_conciliator_dissent -= 5;

    dendryUI.kpd_weddinger_dissent += 5;

    dendryUI.workers_kpd += 6*(1-dendryUI.kpd_dissent);
};

window.support_labor_kpd_action_solo = function() {
    dendryUI.kpd_stalinist_strength += 5;

    dendryUI.kpd_weddinger_strength -= 5;
    dendryUI.kpd_brandlerite_strength -= 5;
    
    dendryUI.kpd_stalinist_dissent -= 5;

    dendryUI.kpd_weddinger_dissent += 5;
    dendryUI.kpd_brandlerite_dissent += 5;

    dendryUI.workers_kpd += 6*(1-dendryUI.kpd_dissent);
};

window.support_labor_kpd_reaction = function() {
    dendryUI.labor_strength += 3;

    dendryUI.labor_dissent -= 3;
    dendryUI.left_dissent -= 3;

    dendryUI.workers_spd += 3*(1-dendryUI.kpd_dissent);

    dendryUI.dvp_relation -= 2;
    dendryUI.ddp_relation -= 1;
    
    dendryUI.labor_goal_completed += 1;
    dendryUI.labor_goal_spd += 1;
};

window.support_labor_spd_action = function() {
    dendryUI.labor_strength += 5;

    dendryUI.labor_dissent -= 5;
    dendryUI.left_dissent -= 5;

    dendryUI.workers_spd += 6*(1-dendryUI.dissent);

    dendryUI.dvp_relation -= 4;
    dendryUI.ddp_relation -= 2;

    dendryUI.labor_goal_completed += 1;
    dendryUI.labor_goal_spd += 1;
    dendryUI.goal_spd_cancel_peoples += 1;

    if ((dendryUI.dvp_relation <= 30 && !dendryUI.lvp_formed) || (dendryUI.lvp_relation <= 30 && dendryUI.lvp_formed)) {
        dendryUI.capital_strike_progress += 1;
    }
};

window.support_labor_spd_reaction = function() {
    dendryUI.labor_strength += 3;

    dendryUI.labor_dissent -= 3;
    dendryUI.left_dissent -= 3;

    dendryUI.workers_spd += 3*(1-dendryUI.dissent);

    dendryUI.dvp_relation -= 2;
    dendryUI.ddp_relation -= 1;
    
    dendryUI.labor_goal_spd += 1;
};

window.support_labor_ddp_action = function() {
    dendryUI.ddp_labor_strength += 4;

    dendryUI.ddp_business_strength -= 4;

    dendryUI.ddp_labor_dissent -= 4;

    dendryUI.ddp_business_dissent += 4;

    dendryUI.workers_ddp += 5*(1-dendryUI.ddp_dissent);

    if ((dendryUI.z_leader == "Wirth" && !(dendryUI.dvp_in_government || dendryUI.dnvp_in_government || dendryUI.nsdap_in_government)) || (dendryUI.z_leader == "Joos" && dendryUI.spd_in_government && dendryUI.peoples_party) || dendryUI.z_leader == "Kaiser") {
        dendryUI.ddp_z_relation -= 1;
    }
    
    dendryUI.ddp_dvp_relation -= 2;
    

    if ((dendryUI.ddp_dvp_relation <= 30 && !dendryUI.lvp_formed)) {
        dendryUI.capital_strike_progress += 1;
    }
};

window.support_labor_ddp_reaction = function() {
    dendryUI.ddp_labor_strength += 2;

    dendryUI.ddp_business_strength -= 2;

    dendryUI.ddp_labor_dissent -= 2;

    dendryUI.ddp_business_dissent += 2;

    dendryUI.workers_ddp += 3*(1-dendryUI.ddp_dissent);

    dendryUI.z_dvp_relation -= 1;
};

window.support_labor_lvp_action = function() {
    dendryUI.lvp_labor_strength += 3;

    dendryUI.lvp_bourgeois_strength -= 3;

    dendryUI.lvp_labor_dissent -= 3;

    dendryUI.lvp_bourgeois_dissent += 3;
    dendryUI.lvp_nationalist_dissent += 3;

    dendryUI.workers_lvp += 4*(1-dendryUI.lvp_dissent);

    if ((dendryUI.z_leader == "Wirth" && !(dendryUI.dvp_in_government || dendryUI.dnvp_in_government || dendryUI.nsdap_in_government)) || (dendryUI.z_leader == "Joos" && dendryUI.spd_in_government && dendryUI.peoples_party) || dendryUI.z_leader == "Kaiser") {
        dendryUI.ddp_z_relation -= 1;
    }
};

window.support_labor_lvp_reaction = function() {
    dendryUI.lvp_labor_strength += 3;

    dendryUI.lvp_business_strength -= 3;

    dendryUI.lvp_labor_dissent -= 3;

    dendryUI.lvp_bourgeois_dissent += 3;
    dendryUI.lvp_nationalist_dissent += 3;

    dendryUI.workers_lvp += 2*(1-dendryUI.lvp_dissent);
};

window.support_labor_z_action = function() {
    dendryUI.z_left_strength += 3;

    dendryUI.z_conservative_strength -= 3;

    dendryUI.z_labor_dissent -= 3;
    dendryUI.z_left_dissent -= 3;

    dendryUI.z_conservative_dissent += 3;

    dendryUI.workers_z += 5*(1-dendryUI.z_dissent);

    dendryUI.z_kpd_relation += 4;
    dendryUI.z_dvp_relation -= 2;
    dendryUI.ddp_z_relation -= 1;

    if ((dendryUI.z_dvp_relation <= 30 && !dendryUI.lvp_formed) || (dendryUI.lvp_z_relation <= 30 && dendryUI.lvp_formed)) {
        dendryUI.capital_strike_progress += 1;
    }
};

window.support_labor_z_reaction = function() {
    dendryUI.z_left_strength += 1;

    dendryUI.z_conservative_strength -= 1;

    dendryUI.z_labor_dissent -= 1;
    dendryUI.z_left_dissent -= 1;

    dendryUI.z_conservative_dissent += 1;

    dendryUI.workers_z += 3*(1-z_dissent);

    dendryUI.z_dvp_relation -= 1;
};

window.support_labor_dvp_reaction = function() {
    dendryUI.dvp_labor_strength += 2;

    dendryUI.dvp_industrialist_strength -= 2;

    dendryUI.dvp_labor_dissent -= 2;

    dendryUI.dvp_industrialist_dissent += 2;
    dendryUI.dvp_nationalist_dissent += 2;

    dendryUI.workers_dvp += 1*(1-dendryUI.dvp_dissent);
};

window.support_labor_kvp_reaction = function() {
    dendryUI.kvp_christian_social_strength += 1;

    dendryUI.kvp_volkskonservativ_strength -= 1;

    dendryUI.kvp_christian_social_dissent -= 1;

    dendryUI.kvp_volkskonservativ_dissent += 1;
    dendryUI.kvp_nationalist_dissent += 1;

    dendryUI.workers_kvp += 1*(1-dendryUI.kvp_dissent);
};

window.support_labor_dnvp_reaction = function() {
    dendryUI.dnvp_christian_social_strength += 1;

    dendryUI.dnvp_authoritarian_strength -= 1;

    dendryUI.dnvp_christian_social_dissent -= 1;

    dendryUI.dnvp_volkskonservativ_dissent += 1
    dendryUI.dnvp_agrarian_dissent += 1;
    dendryUI.dnvp_authoritarian_dissent += 1;

    dendryUI.workers_dnvp += 1*(1-dendryUI.dnvp_dissent);
};

window.support_labor_dnf_reaction = function() {
    dendryUI.dnf_paramilitary_strength += 2;

    dendryUI.dnf_authoritarian_strength -= 2;

    dendryUI.dnf_paramilitary_dissent -= 2;
    dendryUI.dnf_volkisch_dissent -= 2;

    dendryUI.dnf_authoritarian_dissent += 2;
    dendryUI.dnf_nationalist_dissent += 2;
};