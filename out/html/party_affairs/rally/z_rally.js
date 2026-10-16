window.z_rally = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_rally');
    if ((Q.year == 1928 && Q.month == 1) || (Q.next_election_time - Q.time <= 6)) {
        Q.z_rally_timer = 2;
        Q.z_rally_post_timer = 1;
    } else {
        Q.z_rally_timer = 6;
        Q.z_rally_post_timer = 1;
    }

    if (Q.sa_force > 25 && !Q.sa_banned && !Q.return_to_normalcy) {
        if (Q.z_leader == "Kaiser" || Q.z_leader == "Joos" || Q.z_leader == "Wirth") {
            window.police_protect();
        }
    } else {
        window.z_rally_results();
    }
};

window.z_police_protect = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_police_protect');
    Q.police_protect_success_z = Q.prussian_police_loyalty_z*Q.prussian_police_militancy*Q.prussian_police_strength*2 - Q.sa_strength*Q.sa_militancy;

    if (Q.police_protect_success_z >= 0) {
        window.z_rally_results()
    } else {
        window.z_police_protect_lose()
    }
};

window.z_police_protect_lose = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_police_protect_lose');
    Q.workers_nsdap += 3;
    Q.strife += 0.125;
};

window.z_rally_results = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_rally_results');
    if (Q.z_leader == "Bracht") {
        window.z_rally_collaboration();
    } else if (Q.z_leader == "Kaas" || Q.z_leader == "Marx") {
        window.z_rally_catholic();
    } else if (Q.z_leader == "Brüning" || Q.z_leader == "Adenauer") {
        window.z_rally_nationalism();
    } else if (Q.z_leader == "Joos") {
        window.z_rally_democracy();
    } else if (Q.z_leader == "Wirth" || Q.z_leader == "Stegerwald") {
        if (Q.z_lautenbach_adopted && !Q.return_to_normalcy && (Q.lautenbach_adopted <= Q.z_lautenbach_rally || !Q.z_in_government)) {
            window.z_rally_lautenbach();
        } else if (Q.z_leader == "Wirth") {
            window.z_rally_democracy();
        } else {
            window.z_rally_local();
        }
    }
};

window.z_rally_collaboration = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_rally_collaboration');
    Q.catholics_z += 3*(1-Q.z_dissent);
    Q.old_middle_z += 2*(1-Q.z_dissent);
    Q.new_middle_z += 2*(1-Q.z_dissent);

    if (Q.workers_schleicher_bonus > 0) {
        Q.catholics_z += 2*(1-Q.z_dissent);
        Q.workers_z += 2*(1-Q.z_dissent);
        Q.unemployed_z += 2*(1-Q.z_dissent);
    }
    
    Q.ddp_right += 0.5;
    Q.lvp_right += 0.5;
    Q.dvp_right += 0.5;
    
    Q.z_conservative_strength += 3;
    Q.ddp_business_strength += 3;
    Q.lvp_bourgeois_strength += 3;
    Q.dvp_industrialist_strength += 3

    Q.z_labor_dissent -= 3;
    Q.z_center_dissent -= 3;
    Q.z_left_dissent += 3;
    Q.z_conservative_dissent -= 3;
    
    Q.z_autocratization += 1;
};

window.z_rally_catholic = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_rally_catholic');
    Q.catholics_z += 1*(1-Q.dissent);

    if (Q.prussian_concordat_progress) {
        Q.catholics_z += 1*(1-Q.dissent);
    }

    if (Q.prussian_concordat) {
        Q.catholics_z += 2*(1-Q.dissent);
    }

    if (Q.reichskonkordat_progress) {
        Q.catholics_z += 2*(1-Q.dissent);
    }

    if (Q.reichskonkordat) {
        Q.catholics_z += 2*(1-Q.dissent);
    }
    
    Q.z_conservative_strength += 3;
    Q.z_center_strength += 3;
    
    Q.z_conservative_dissent -= 3;
    Q.z_center_dissent -= 3;
    Q.z_labor_dissent -= 3;
    Q.z_left_dissent -= 3;
};

window.z_rally_nationalism = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_rally_nationalism');
    Q.z_autocratization += 1;
    Q.nationalism += 3*(1-Q.z_dissent);

    Q.catholics_z += 2*(1-Q.z_dissent);
    Q.old_middle_z += 2*(1-Q.z_dissent);
    Q.rural_z += 1*(1-Q.z_dissent);

    if (Q.z_autocratization >= 3) {
        Q.pro_republic -= 3*(1-Q.z_dissent);

        if (Q.nationalism >= 60) {
            Q.ddp_right += 0.5;
            Q.lvp_right += 0.5;
            Q.dvp_right += 0.5;

            Q.z_conservative_strength += 3;
            Q.ddp_regionalist_strength += 3;
            Q.dvp_nationalist_strength += 3;
            Q.lvp_nationalist_strength += 3;
        }
    }
};

window.z_rally_democracy = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_rally_democracy');
    Q.z_democratization += 1;
    
    Q.pro_republic += 3*(1-Q.z_dissent);
    
    if (Q.z_democratization >= 3) {
        Q.catholics_z += 2*(1-Q.z_dissent);
        Q.workers_z += 1*(1-Q.z_dissent);
        Q.new_middle_z += 1*(1-Q.z_dissent);
        Q.unemployed_z += 1*(1-Q.z_dissent);
    }

    if (Q.pro_republic >= 70) {
        Q.ddp_left += 0.5;
        Q.lvp_left += 0.5;
        Q.dvp_left += 0.5;

        Q.z_center_strength += 3;
        Q.ddp_liberal_strength += 3;
        Q.lvp_liberal_strength += 3;
        Q.dvp_liberal_strength += 3;
    }
};

window.z_rally_lautenbach = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_rally_lautenbach');
    Q.catholics_z += 3*(1-Q.z_dissent);
    Q.new_middle_z += 1*(1-Q.z_dissent);
    Q.old_middle_z += 1*(1-Q.z_dissent);
    Q.workers_z += 2*(1-Q.z_dissent);
    Q.unemployed_z += 1*(1-Q.z_dissent);
    Q.rural_z += 1*(1-Q.z_dissent);

    if (Q.lautenbach_adopted) {
        Q.catholics_z += 3*(1-Q.z_dissent);
        Q.workers_z += 2*(1-Q.z_dissent);
        Q.rural_z += 1*(1-Q.z_dissent);
        Q.new_middle_z += 1*(1-Q.z_dissent);
        Q.old_middle_z += 1*(1-Q.z_dissent);
        Q.unemployed_ddp += 1*(1-Q.z_dissent);
    }
    
    Q.z_lautenbach_rally += 1;
};

window.z_rally_local = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z_rally_local');
    Q.workers_z += 3*(1-Q.z_dissent);
    Q.old_middle_z += 1*(1-Q.z_dissent);
    Q.new_middle_z += 2*(1-Q.z_dissent);
    Q.unemployed_z += 3*(1-Q.z_dissent);
};