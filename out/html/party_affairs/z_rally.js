window.z_rally = function() {
    if ((dendryUI.year == 1928 && dendryUI.month == 1) || (dendryUI.next_election_time - dendryUI.time <= 6)) {
        dendryUI.z_rally_timer = 2;
    } else {
        dendryUI.z_rally_timer = 6;
    }

    if (dendryUI.sa_force > 25 && !dendryUI.sa_banned && !dendryUI.return_to_normalcy) {
        if (dendryUI.z_leader == "Kaiser" || dendryUI.z_leader == "Joos" || dendryUI.z_leader == "Wirth") {
            window.police_protect();
        }
    } else {
        window.z_rally_results();
    }
};

window.z_police_protect = function() {
    dendryUI.police_protect_success_z = dendryUI.prussian_police_loyalty_z*dendryUI.prussian_police_militancy*dendryUI.prussian_police_strength*2 - dendryUI.sa_strength*dendryUI.sa_militancy;

    if (dendryUI.police_protect_success_z >= 0) {
        window.z_rally_results()
    } else {
        window.z_police_protect_lose()
    }
};

window.z_police_protect_lose = function() {
    dendryUI.workers_nsdap += 3;
    strife += 0.125;
};

window.z_rally_results = function() {
    if (dendryUI.z_leader == "Bracht") {
        window.z_rally_collaboration();
    } else if (dendryUI.z_leader == "Kaas" || dendryUI.z_leader == "Marx") {
        window.z_rally_catholic();
    } else if (dendryUI.z_leader == "Brüning" || dendryUI.z_leader == "Adenauer") {
        window.z_rally_nationalism();
    } else if (dendryUI.z_leader == "Joos") {
        window.z_rally_democracy();
    } else if (dendryUI.z_leader == "Wirth" || dendryUI.z_leader == "Stegerwald") {
        if (dendryUI.z_lautenbach_adopted && !dendryUI.return_to_normalcy && (dendryUI.lautenbach_adopted <= dendryUI.z_lautenbach_rally || !dendryUI.z_in_government)) {
            window.z_rally_lautenbach();
        } else if (dendryUI.z_leader == "Wirth") {
            window.z_rally_democracy();
        } else {
            window.z_rally_local();
        }
    }
};

window.z_rally_collaboration = function() {
    dendryUI.catholics_z += 3*(1-dendryUI.z_dissent);
    dendryUI.old_middle_z += 2*(1-dendryUI.z_dissent);
    dendryUI.new_middle_z += 2*(1-dendryUI.z_dissent);

    if (dendryUI.workers_schleicher_bonus > 0) {
        dendryUI.catholics_z += 2*(1-dendryUI.z_dissent);
        dendryUI.workers_z += 2*(1-dendryUI.z_dissent);
        dendryUI.unemployed_z += 2*(1-dendryUI.z_dissent);
    }
    
    dendryUI.ddp_right += 0.5;
    dendryUI.lvp_right += 0.5;
    dendryUI.dvp_right += 0.5;
    
    dendryUI.z_conservative_strength += 3;
    dendryUI.ddp_business_strength += 3;
    dendryUI.lvp_bourgeois_strength += 3;
    dendryUI.dvp_industrialist_strength += 3

    dendryUI.z_labor_dissent -= 3;
    dendryUI.z_center_dissent -= 3;
    dendryUI.z_left_dissent += 3;
    dendryUI.z_conservative_dissent -= 3;
    
    dendryUI.z_autocratization += 1;
};

window.z_rally_catholic = function() {
    dendryUI.catholics_z += 1*(1-dendryUI.dissent);

    if (dendryUI.prussian_concordat_progress) {
        dendryUI.catholics_z += 1*(1-dendryUI.dissent);
    }

    if (dendryUI.prussian_concordat) {
        dendryUI.catholics_z += 2*(1-dendryUI.dissent);
    }

    if (dendryUI.reichskonkordat_progress) {
        dendryUI.catholics_z += 2*(1-dendryUI.dissent);
    }

    if (dendryUI.reichskonkordat) {
        dendryUI.catholics_z += 2*(1-dendryUI.dissent);
    }
    
    dendryUI.z_conservative_strength += 3;
    dendryUI.z_center_strength += 3;
    
    dendryUI.z_conservative_dissent -= 3;
    dendryUI.z_center_dissent -= 3;
    dendryUI.z_labor_dissent -= 3;
    dendryUI.z_left_dissent -= 3;
};

window.z_rally_nationalism = function() {
    dendryUI.z_autocratization += 1;
    dendryUI.nationalism += 3*(1-dendryUI.z_dissent);

    dendryUI.catholics_z += 2*(1-dendryUI.z_dissent);
    dendryUI.old_middle_z += 2*(1-dendryUI.z_dissent);
    dendryUI.rural_z += 1*(1-dendryUI.z_dissent);

    if (dendryUI.z_autocratization >= 3) {
        dendryUI.pro_republic -= 3*(1-dendryUI.z_dissent);

        if (dendryUI.nationalism >= 60) {
            dendryUI.ddp_right += 0.5;
            dendryUI.lvp_right += 0.5;
            dendryUI.dvp_right += 0.5;

            dendryUI.z_conservative_strength += 3;
            dendryUI.ddp_regionalist_strength += 3;
            dendryUI.dvp_nationalist_strength += 3;
            dendryUI.lvp_nationalist_strength += 3;
        }
    }
};

window.z_rally_democracy = function() {
    dendryUI.z_democratization += 1;
    
    dendryUI.pro_republic += 3*(1-dendryUI.z_dissent);
    
    if (dendryUI.z_democratization >= 3) {
        dendryUI.catholics_z += 2*(1-dendryUI.z_dissent);
        dendryUI.workers_z += 1*(1-dendryUI.z_dissent);
        dendryUI.new_middle_z += 1*(1-dendryUI.z_dissent);
        dendryUI.unemployed_z += 1*(1-dendryUI.z_dissent);
    }

    if (dendryUI.pro_republic >= 70) {
        dendryUI.ddp_left += 0.5;
        dendryUI.lvp_left += 0.5;
        dendryUI.dvp_left += 0.5;

        dendryUI.z_center_strength += 3;
        dendryUI.ddp_liberal_strength += 3;
        dendryUI.lvp_liberal_strength += 3;
        dendryUI.dvp_liberal_strength += 3;
    }
};

window.z_rally_lautenbach = function() {
    dendryUI.catholics_z += 3*(1-dendryUI.z_dissent);
    dendryUI.new_middle_z += 1*(1-dendryUI.z_dissent);
    dendryUI.old_middle_z += 1*(1-dendryUI.z_dissent);
    dendryUI.workers_z += 2*(1-dendryUI.z_dissent);
    dendryUI.unemployed_z += 1*(1-dendryUI.z_dissent);
    dendryUI.rural_z += 1*(1-dendryUI.z_dissent);

    if (dendryUI.lautenbach_adopted) {
        dendryUI.catholics_z += 3*(1-dendryUI.z_dissent);
        dendryUI.workers_z += 2*(1-dendryUI.z_dissent);
        dendryUI.rural_z += 1*(1-dendryUI.z_dissent);
        dendryUI.new_middle_z += 1*(1-dendryUI.z_dissent);
        dendryUI.old_middle_z += 1*(1-dendryUI.z_dissent);
        dendryUI.unemployed_ddp += 1*(1-dendryUI.z_dissent);
    }
    
    dendryUI.z_lautenbach_rally += 1;
};

window.z_rally_local = function() {
    workers_spd += 3*(1-dissent);
    old_middle_spd += 1*(1-dissent);
    new_middle_spd += 2*(1-dissent);
    unemployed_spd += 3*(1-dissent);
};