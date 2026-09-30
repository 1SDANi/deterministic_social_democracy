window.dvp_rally = function() {
    if ((dendryUI.year == 1928 && dendryUI.month == 1) || (dendryUI.next_election_time - dendryUI.time <= 6)) {
        dendryUI.dvp_rally_timer = 2;
    } else {
        dendryUI.dvp_rally_timer = 6;
    }

    if (dendryUI.sa_force > 25 && !dendryUI.sa_banned && !dendryUI.return_to_normalcy) {
        if (dendryUI.dvp_ideology == "Left") {
            window.dvp_police_protect();
        }
    } else {
        window.dvp_rally_results();
    }
};

window.dvp_police_protect = function() {
    dendryUI.police_protect_success_dvp = dendryUI.prussian_police_loyalty_dvp*dendryUI.prussian_police_militancy*dendryUI.prussian_police_strength*2 - dendryUI.sa_strength*dendryUI.sa_militancy;

    if (dendryUI.police_protect_success_dvp >= 0) {
        window.dvp_rally_results()
    } else {
        window.dvp_police_protect_lose()
    }
};

window.dvp_police_protect_lose = function() {
    dendryUI.workers_nsdap += 3;
    strife += 0.125;
};

window.dvp_rally_results = function() {
    if (dendryUI.workers_schleicher_bonus) {
        window.dvp_rally_collaboration();
    } else if (dendryUI.dvp_leader == "zu Dohna-Schlodien" || dendryUI.dvp_leader == "Luther") {
        if (upper_tax_rates > 1) {
            window.dvp_rally_reagan();
        } else {
            window.dvp_rally_democracy();
        }
    } else if (dendryUI.dvp_leader == "Scholz" || dendryUI.dvp_leader == "Dingeldey" || dendryUI.dvp_leader == "Hugo") {
        window.dvp_rally_nationalism();
    } else if (dendryUI.dvp_leader == "Thiel" || dendryUI.dvp_leader == "Glatzel") {
        if (dendryUI.return_to_normalcy == 0 && dendryUI.dvp_lautenbach_adopted && !dendryUI.return_to_normalcy && (dendryUI.lautenbach_adopted <= dendryUI.dvp_lautenbach_rally || !dendryUI.dvp_in_government)) {
            window.dvp_rally_lautenbach();
        } else {
            window.dvp_rally_local();
        }
    } else if (dendryUI.dvp_leader == "Stresemann" || dendryUI.dvp_leader == "Kardorff" || dendryUI.dvp_leader == "Curtius") {
        window.dvp_rally_democracy();
    }
};

window.dvp_rally_collaboration = function() {
    dendryUI.old_middle_dvp += 3*(1-dendryUI.dvp_dissent);
    dendryUI.new_middle_dvp += 2*(1-dendryUI.dvp_dissent);

    if (dendryUI.workers_schleicher_bonus > 0) {
        dendryUI.workers_dvp += 1*(1-dendryUI.dvp_dissent);
        dendryUI.unemployed_dvp += 1*(1-dendryUI.dvp_dissent);
        dendryUI.rural_dvp += 1*(1-dendryUI.dvp_dissent);
    }
    
    if (dendryUI.workers_schleicher_bonus > 1) {
        dendryUI.workers_dvp += 1*(1-dendryUI.dvp_dissent);
        dendryUI.unemployed_dvp += 1*(1-dendryUI.dvp_dissent);
        dendryUI.rural_dvp += 1*(1-dendryUI.dvp_dissent);
    }
    
    dendryUI.dvp_right += 1;
    dendryUI.ddp_right += 1;
    dendryUI.lvp_right += 1;

    dendryUI.dvp_industrialist_strength += 3;
    dendryUI.ddp_business_strength += 3;
    dendryUI.z_conservative_strength += 3;

    dendryUI.dvp_labor_dissent -= 3;
    dendryUI.dvp_liberal_dissent -= 3;
    dendryUI.dvp_industrialist_dissent -= 3;
    dendryUI.dvp_nationalist_dissent -= 3;

    dendryUI.dvp_nationalism += 1;
};

window.dvp_rally_reagan = function() {
    dendryUI.ld_middle_dvp += 2*(1-dendryUI.dvp_dissent);
    dendryUI.new_middle_dvp += (1-dendryUI.dvp_dissent);
    
    if (dendryUI.upper_tax_rates > 1) {
        dendryUI.rural_dvp += 1*(1-dendryUI.dvp_dissent);
        dendryUI.old_middle_dvp += 1*(1-dendryUI.dvp_dissent);
        dendryUI.new_middle_dvp += (1-dendryUI.dvp_dissent);
        dendryUI.workers_dvp += 1*(1-dendryUI.dvp_dissent);
    }
    
    dendryUI.dvp_right += 0.5;

    dendryUI.dvp_liberal_strength += 3;
    dendryUI.dvp_industrialist_strength += 3;

    dendryUI.dvp_industrialist_dissent -= 3;
    dendryUI.dvp_liberal_dissent -= 3;
};

window.dvp_rally_nationalism = function() {
    dendryUI.dvp_nationalism += 1;
    dendryUI.nationalism += 3*(1-dendryUI.dvp_dissent);
    dendryUI.new_middle_dvp += 2*(1-dendryUI.dvp_dissent);
    dendryUI.old_middle_dvp += 2*(1-dendryUI.dvp_dissent);
    dendryUI.rural_dvp += 1*(1-dendryUI.dvp_dissent);

    if (dendryUI.dvp_nationalism >= 3)
    {
        dendryUI.pro_republic -= 3*(1-dendryUI.dvp_dissent);

        if (dendryUI.nationalism >= 60) {
            dendryUI.dvp_right += 0.5;
            dendryUI.ddp_right += 0.5;

            dendryUI.dvp_nationalist_strength += 3;
            dendryUI.ddp_regionalist_strength += 3;
            dendryUI.z_conservative_strength += 3;
        }
    }
};

window.dvp_rally_democracy = function() {
    dendryUI.dvp_democratization -= 1;
    dendryUI.pro_republic += 3*(1-dendryUI.dvp_dissent);
    if (dendryUI.dvp_democratization >= 3) {
        dendryUI.rural_dvp += 1*(1-dendryUI.dvp_dissent);
        dendryUI.new_middle_dvp += 2*(1-dendryUI.dvp_dissent);
        dendryUI.old_middle_dvp += 2*(1-dendryUI.dvp_dissent);
    }

    if (dendryUI.pro_republic >= 70) {
        dendryUI.dvp_left += 0.5;
        dendryUI.ddp_left += 0.5;

        dendryUI.dvp_liberal_strength += 3;
        dendryUI.ddp_liberal_strength += 3;
        dendryUI.z_center_strength += 3;
    }
};

window.dvp_rally_lautenbach = function() {
    dendryUI.old_middle_dvp += 3*(1-dendryUI.dvp_dissent);
    dendryUI.new_middle_dvp += 2*(1-dendryUI.dvp_dissent);
    dendryUI.rural_dvp += 2*(1-dendryUI.dvp_dissent);
    dendryUI.unemployed_dvp += 1*(1-dendryUI.dvp_dissent);
    dendryUI.workers_dvp += 1*(1-dendryUI.dvp_dissent);

    if (dendryUI.lautenbach_adopted) {
        dendryUI.old_middle_dvp += 3*(1-dendryUI.dvp_dissent);
        dendryUI.new_middle_dvp += 2*(1-dendryUI.dvp_dissent);
        dendryUI.rural_dvp += 1*(1-dendryUI.dvp_dissent);
        dendryUI.workers_dvp += 2*(1-dendryUI.dvp_dissent);
        dendryUI.unemployed_dvp += 2*(1-dendryUI.dvp_dissent);
    }
    
    dendryUI.dvp_lautenbach_rally += 1;
};

window.dvp_rally_lautenbach = function() {
    dendryUI.workers_dvp += 2*(1-dendryUI.dvp_dissent);
    dendryUI.old_middle_dvp += 2*(1-dendryUI.dvp_dissent);
    dendryUI.new_middle_dvp += 2*(1-dendryUI.dvp_dissent);
    dendryUI.unemployed_dvp += 2*(1-dendryUI.dvp_dissent);
};