window.z_rally = function() {
    console.log('z_rally');
    if ((dendryUI.dendryEngine.state.qualities.year == 1928 && dendryUI.dendryEngine.state.qualities.month == 1) || (dendryUI.dendryEngine.state.qualities.next_election_time - dendryUI.dendryEngine.state.qualities.time <= 6)) {
        dendryUI.dendryEngine.state.qualities.z_rally_timer = 2;
    } else {
        dendryUI.dendryEngine.state.qualities.z_rally_timer = 6;
    }

    if (dendryUI.dendryEngine.state.qualities.sa_force > 25 && !dendryUI.dendryEngine.state.qualities.sa_banned && !dendryUI.dendryEngine.state.qualities.return_to_normalcy) {
        if (dendryUI.dendryEngine.state.qualities.z_leader == "Kaiser" || dendryUI.dendryEngine.state.qualities.z_leader == "Joos" || dendryUI.dendryEngine.state.qualities.z_leader == "Wirth") {
            window.police_protect();
        }
    } else {
        window.z_rally_results();
    }
};

window.z_police_protect = function() {
    console.log('z_police_protect');
    dendryUI.dendryEngine.state.qualities.police_protect_success_z = dendryUI.dendryEngine.state.qualities.prussian_police_loyalty_z*dendryUI.dendryEngine.state.qualities.prussian_police_militancy*dendryUI.dendryEngine.state.qualities.prussian_police_strength*2 - dendryUI.dendryEngine.state.qualities.sa_strength*dendryUI.dendryEngine.state.qualities.sa_militancy;

    if (dendryUI.dendryEngine.state.qualities.police_protect_success_z >= 0) {
        window.z_rally_results()
    } else {
        window.z_police_protect_lose()
    }
};

window.z_police_protect_lose = function() {
    console.log('z_police_protect_lose');
    dendryUI.dendryEngine.state.qualities.workers_nsdap += 3;
    dendryUI.dendryEngine.state.qualities.strife += 0.125;
};

window.z_rally_results = function() {
    console.log('z_rally_results');
    if (dendryUI.dendryEngine.state.qualities.z_leader == "Bracht") {
        window.z_rally_collaboration();
    } else if (dendryUI.dendryEngine.state.qualities.z_leader == "Kaas" || dendryUI.dendryEngine.state.qualities.z_leader == "Marx") {
        window.z_rally_catholic();
    } else if (dendryUI.dendryEngine.state.qualities.z_leader == "Brüning" || dendryUI.dendryEngine.state.qualities.z_leader == "Adenauer") {
        window.z_rally_nationalism();
    } else if (dendryUI.dendryEngine.state.qualities.z_leader == "Joos") {
        window.z_rally_democracy();
    } else if (dendryUI.dendryEngine.state.qualities.z_leader == "Wirth" || dendryUI.dendryEngine.state.qualities.z_leader == "Stegerwald") {
        if (dendryUI.dendryEngine.state.qualities.z_lautenbach_adopted && !dendryUI.dendryEngine.state.qualities.return_to_normalcy && (dendryUI.dendryEngine.state.qualities.lautenbach_adopted <= dendryUI.dendryEngine.state.qualities.z_lautenbach_rally || !dendryUI.dendryEngine.state.qualities.z_in_government)) {
            window.z_rally_lautenbach();
        } else if (dendryUI.dendryEngine.state.qualities.z_leader == "Wirth") {
            window.z_rally_democracy();
        } else {
            window.z_rally_local();
        }
    }
};

window.z_rally_collaboration = function() {
    console.log('z_rally_collaboration');
    dendryUI.dendryEngine.state.qualities.catholics_z += 3*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);

    if (dendryUI.dendryEngine.state.qualities.workers_schleicher_bonus > 0) {
        dendryUI.dendryEngine.state.qualities.catholics_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.workers_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.ddp_right += 0.5;
    dendryUI.dendryEngine.state.qualities.lvp_right += 0.5;
    dendryUI.dendryEngine.state.qualities.dvp_right += 0.5;
    
    dendryUI.dendryEngine.state.qualities.z_conservative_strength += 3;
    dendryUI.dendryEngine.state.qualities.ddp_business_strength += 3;
    dendryUI.dendryEngine.state.qualities.lvp_bourgeois_strength += 3;
    dendryUI.dendryEngine.state.qualities.dvp_industrialist_strength += 3

    dendryUI.dendryEngine.state.qualities.z_labor_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.z_center_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.z_left_dissent += 3;
    dendryUI.dendryEngine.state.qualities.z_conservative_dissent -= 3;
    
    dendryUI.dendryEngine.state.qualities.z_autocratization += 1;
};

window.z_rally_catholic = function() {
    console.log('z_rally_catholic');
    dendryUI.dendryEngine.state.qualities.catholics_z += 1*(1-dendryUI.dendryEngine.state.qualities.dissent);

    if (dendryUI.dendryEngine.state.qualities.prussian_concordat_progress) {
        dendryUI.dendryEngine.state.qualities.catholics_z += 1*(1-dendryUI.dendryEngine.state.qualities.dissent);
    }

    if (dendryUI.dendryEngine.state.qualities.prussian_concordat) {
        dendryUI.dendryEngine.state.qualities.catholics_z += 2*(1-dendryUI.dendryEngine.state.qualities.dissent);
    }

    if (dendryUI.dendryEngine.state.qualities.reichskonkordat_progress) {
        dendryUI.dendryEngine.state.qualities.catholics_z += 2*(1-dendryUI.dendryEngine.state.qualities.dissent);
    }

    if (dendryUI.dendryEngine.state.qualities.reichskonkordat) {
        dendryUI.dendryEngine.state.qualities.catholics_z += 2*(1-dendryUI.dendryEngine.state.qualities.dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.z_conservative_strength += 3;
    dendryUI.dendryEngine.state.qualities.z_center_strength += 3;
    
    dendryUI.dendryEngine.state.qualities.z_conservative_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.z_center_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.z_labor_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.z_left_dissent -= 3;
};

window.z_rally_nationalism = function() {
    console.log('z_rally_nationalism');
    dendryUI.dendryEngine.state.qualities.z_autocratization += 1;
    dendryUI.dendryEngine.state.qualities.nationalism += 3*(1-dendryUI.dendryEngine.state.qualities.z_dissent);

    dendryUI.dendryEngine.state.qualities.catholics_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.rural_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);

    if (dendryUI.dendryEngine.state.qualities.z_autocratization >= 3) {
        dendryUI.dendryEngine.state.qualities.pro_republic -= 3*(1-dendryUI.dendryEngine.state.qualities.z_dissent);

        if (dendryUI.dendryEngine.state.qualities.nationalism >= 60) {
            dendryUI.dendryEngine.state.qualities.ddp_right += 0.5;
            dendryUI.dendryEngine.state.qualities.lvp_right += 0.5;
            dendryUI.dendryEngine.state.qualities.dvp_right += 0.5;

            dendryUI.dendryEngine.state.qualities.z_conservative_strength += 3;
            dendryUI.dendryEngine.state.qualities.ddp_regionalist_strength += 3;
            dendryUI.dendryEngine.state.qualities.dvp_nationalist_strength += 3;
            dendryUI.dendryEngine.state.qualities.lvp_nationalist_strength += 3;
        }
    }
};

window.z_rally_democracy = function() {
    console.log('z_rally_democracy');
    dendryUI.dendryEngine.state.qualities.z_democratization += 1;
    
    dendryUI.dendryEngine.state.qualities.pro_republic += 3*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    
    if (dendryUI.dendryEngine.state.qualities.z_democratization >= 3) {
        dendryUI.dendryEngine.state.qualities.catholics_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.workers_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    }

    if (dendryUI.dendryEngine.state.qualities.pro_republic >= 70) {
        dendryUI.dendryEngine.state.qualities.ddp_left += 0.5;
        dendryUI.dendryEngine.state.qualities.lvp_left += 0.5;
        dendryUI.dendryEngine.state.qualities.dvp_left += 0.5;

        dendryUI.dendryEngine.state.qualities.z_center_strength += 3;
        dendryUI.dendryEngine.state.qualities.ddp_liberal_strength += 3;
        dendryUI.dendryEngine.state.qualities.lvp_liberal_strength += 3;
        dendryUI.dendryEngine.state.qualities.dvp_liberal_strength += 3;
    }
};

window.z_rally_lautenbach = function() {
    console.log('z_rally_lautenbach');
    dendryUI.dendryEngine.state.qualities.catholics_z += 3*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.workers_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.rural_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);

    if (dendryUI.dendryEngine.state.qualities.lautenbach_adopted) {
        dendryUI.dendryEngine.state.qualities.catholics_z += 3*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.workers_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.rural_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.old_middle_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_ddp += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.z_lautenbach_rally += 1;
};

window.z_rally_local = function() {
    console.log('z_rally_local');
    dendryUI.dendryEngine.state.qualities.workers_z += 3*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_z += 1*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_z += 2*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_z += 3*(1-dendryUI.dendryEngine.state.qualities.z_dissent);
};