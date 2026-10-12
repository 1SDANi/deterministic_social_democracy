window.dvp_rally = function() {
    console.log('dvp_rally');
    if ((dendryUI.dendryEngine.state.qualities.year == 1928 && dendryUI.dendryEngine.state.qualities.month == 1) || (dendryUI.dendryEngine.state.qualities.next_election_time - dendryUI.dendryEngine.state.qualities.time <= 6)) {
        dendryUI.dendryEngine.state.qualities.dvp_rally_timer = 2;
    } else {
        dendryUI.dendryEngine.state.qualities.dvp_rally_timer = 6;
    }

    if (dendryUI.dendryEngine.state.qualities.sa_force > 25 && !dendryUI.dendryEngine.state.qualities.sa_banned && !dendryUI.dendryEngine.state.qualities.return_to_normalcy) {
        if (dendryUI.dendryEngine.state.qualities.dvp_ideology == "Left") {
            window.dvp_police_protect();
        }
    } else {
        window.dvp_rally_results();
    }
};

window.dvp_police_protect = function() {
    console.log('dvp_police_protect');
    dendryUI.dendryEngine.state.qualities.police_protect_success_dvp = dendryUI.dendryEngine.state.qualities.prussian_police_loyalty_dvp*dendryUI.dendryEngine.state.qualities.prussian_police_militancy*dendryUI.dendryEngine.state.qualities.prussian_police_strength*2 - dendryUI.dendryEngine.state.qualities.sa_strength*dendryUI.dendryEngine.state.qualities.sa_militancy;

    if (dendryUI.dendryEngine.state.qualities.police_protect_success_dvp >= 0) {
        window.dvp_rally_results()
    } else {
        window.dvp_police_protect_lose()
    }
};

window.dvp_police_protect_lose = function() {
    console.log('dvp_police_protect_lose');
    dendryUI.dendryEngine.state.qualities.workers_nsdap += 3;
    dendryUI.dendryEngine.state.qualities.strife += 0.125;
};

window.dvp_rally_results = function() {
    console.log('dvp_rally_results');
    if (dendryUI.dendryEngine.state.qualities.workers_schleicher_bonus) {
        window.dvp_rally_collaboration();
    } else if (dendryUI.dendryEngine.state.qualities.dvp_leader == "zu Dohna-Schlodien" || dendryUI.dendryEngine.state.qualities.dvp_leader == "Luther") {
        if (upper_tax_rates > 1) {
            window.dvp_rally_reagan();
        } else {
            window.dvp_rally_democracy();
        }
    } else if (dendryUI.dendryEngine.state.qualities.dvp_leader == "Scholz" || dendryUI.dendryEngine.state.qualities.dvp_leader == "Dingeldey" || dendryUI.dendryEngine.state.qualities.dvp_leader == "Hugo") {
        window.dvp_rally_nationalism();
    } else if (dendryUI.dendryEngine.state.qualities.dvp_leader == "Thiel" || dendryUI.dendryEngine.state.qualities.dvp_leader == "Glatzel") {
        if (dendryUI.dendryEngine.state.qualities.return_to_normalcy == 0 && dendryUI.dendryEngine.state.qualities.dvp_lautenbach_adopted && !dendryUI.dendryEngine.state.qualities.return_to_normalcy && (dendryUI.dendryEngine.state.qualities.lautenbach_adopted <= dendryUI.dendryEngine.state.qualities.dvp_lautenbach_rally || !dendryUI.dendryEngine.state.qualities.dvp_in_government)) {
            window.dvp_rally_lautenbach();
        } else {
            window.dvp_rally_local();
        }
    } else if (dendryUI.dendryEngine.state.qualities.dvp_leader == "Stresemann" || dendryUI.dendryEngine.state.qualities.dvp_leader == "Kardorff" || dendryUI.dendryEngine.state.qualities.dvp_leader == "Curtius") {
        window.dvp_rally_democracy();
    }
};

window.dvp_rally_collaboration = function() {
    console.log('dvp_rally_collaboration');
    dendryUI.dendryEngine.state.qualities.old_middle_dvp += 3*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);

    if (dendryUI.dendryEngine.state.qualities.workers_schleicher_bonus > 0) {
        dendryUI.dendryEngine.state.qualities.workers_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.rural_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    }
    
    if (dendryUI.dendryEngine.state.qualities.workers_schleicher_bonus > 1) {
        dendryUI.dendryEngine.state.qualities.workers_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.rural_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.dvp_right += 1;
    dendryUI.dendryEngine.state.qualities.ddp_right += 1;
    dendryUI.dendryEngine.state.qualities.lvp_right += 1;

    dendryUI.dendryEngine.state.qualities.dvp_industrialist_strength += 3;
    dendryUI.dendryEngine.state.qualities.ddp_business_strength += 3;
    dendryUI.dendryEngine.state.qualities.z_conservative_strength += 3;

    dendryUI.dendryEngine.state.qualities.dvp_labor_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.dvp_liberal_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.dvp_industrialist_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.dvp_nationalist_dissent -= 3;

    dendryUI.dendryEngine.state.qualities.dvp_nationalism += 1;
};

window.dvp_rally_reagan = function() {
    console.log('dvp_rally_reagan');
    dendryUI.dendryEngine.state.qualities.ld_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_dvp += (1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    
    if (dendryUI.dendryEngine.state.qualities.upper_tax_rates > 1) {
        dendryUI.dendryEngine.state.qualities.rural_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.old_middle_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_dvp += (1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.workers_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.dvp_right += 0.5;

    dendryUI.dendryEngine.state.qualities.dvp_liberal_strength += 3;
    dendryUI.dendryEngine.state.qualities.dvp_industrialist_strength += 3;

    dendryUI.dendryEngine.state.qualities.dvp_industrialist_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.dvp_liberal_dissent -= 3;
};

window.dvp_rally_nationalism = function() {
    console.log('dvp_rally_nationalism');
    dendryUI.dendryEngine.state.qualities.dvp_nationalism += 1;
    dendryUI.dendryEngine.state.qualities.nationalism += 3*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.rural_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);

    if (dendryUI.dendryEngine.state.qualities.dvp_nationalism >= 3)
    {
        dendryUI.dendryEngine.state.qualities.pro_republic -= 3*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);

        if (dendryUI.dendryEngine.state.qualities.nationalism >= 60) {
            dendryUI.dendryEngine.state.qualities.dvp_right += 0.5;
            dendryUI.dendryEngine.state.qualities.ddp_right += 0.5;

            dendryUI.dendryEngine.state.qualities.dvp_nationalist_strength += 3;
            dendryUI.dendryEngine.state.qualities.ddp_regionalist_strength += 3;
            dendryUI.dendryEngine.state.qualities.z_conservative_strength += 3;
        }
    }
};

window.dvp_rally_democracy = function() {
    console.log('dvp_rally_democracy');
    dendryUI.dendryEngine.state.qualities.dvp_democratization -= 1;
    dendryUI.dendryEngine.state.qualities.pro_republic += 3*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    if (dendryUI.dendryEngine.state.qualities.dvp_democratization >= 3) {
        dendryUI.dendryEngine.state.qualities.rural_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.old_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    }

    if (dendryUI.dendryEngine.state.qualities.pro_republic >= 70) {
        dendryUI.dendryEngine.state.qualities.dvp_left += 0.5;
        dendryUI.dendryEngine.state.qualities.ddp_left += 0.5;

        dendryUI.dendryEngine.state.qualities.dvp_liberal_strength += 3;
        dendryUI.dendryEngine.state.qualities.ddp_liberal_strength += 3;
        dendryUI.dendryEngine.state.qualities.z_center_strength += 3;
    }
};

window.dvp_rally_lautenbach = function() {
    console.log('dvp_rally_lautenbach');
    dendryUI.dendryEngine.state.qualities.old_middle_dvp += 3*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.rural_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.workers_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);

    if (dendryUI.dendryEngine.state.qualities.lautenbach_adopted) {
        dendryUI.dendryEngine.state.qualities.old_middle_dvp += 3*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.rural_dvp += 1*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.workers_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.dvp_lautenbach_rally += 1;
};

window.dvp_rally_local = function() {
    console.log('dvp_rally_local');
    dendryUI.dendryEngine.state.qualities.workers_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_dvp += 2*(1-dendryUI.dendryEngine.state.qualities.dvp_dissent);
};