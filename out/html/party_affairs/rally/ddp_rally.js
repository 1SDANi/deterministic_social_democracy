window.ddp_rally = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp rally');
    if ((Q.year == 1928 && Q.month == 1) || (Q.next_election_time - Q.time <= 6)) {
        Q.ddp_rally_timer = 2;
        Q.ddp_rally_post_timer = 1;
    } else {
        Q.ddp_rally_timer = 6;
        Q.ddp_rally_post_timer = 1;
    }

    if (Q.sa_force > 25 && !Q.sa_banned && !Q.return_to_normalcy) {
        if (Q.ddp_ideology == "Left") {
            window.ddp_police_protect();
        }
    } else {
        window.ddp_rally_results();
    }
};

window.ddp_police_protect = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp_police_protect');
    Q.police_protect_success_ddp = Q.prussian_police_loyalty_ddp*Q.prussian_police_militancy*Q.prussian_police_strength*2 - Q.sa_strength*Q.sa_militancy;

    if (Q.police_protect_success_ddp >= 0) {
        window.ddp_rally_results()
    } else {
        window.ddp_police_protect_lose()
    }
};

window.ddp_police_protect_lose = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp_police_protect_lose');
    Q.workers_nsdap += 3;
    Q.strife += 0.125;
};

window.ddp_rally_results = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp_rally_results');
    if (Q.ddp_leader == "Mahraun") {
        window.ddp_rally_collaboration();
    } else if (Q.ddp_leader == "Lüders") {
        if (Q.welfare > 0) {
            window.ddp_rally_welfare();
        } else {
            window.ddp_rally_local();
        }
    } else if (Q.ddp_leader == "Lemmer") {
        if (Q.return_to_normalcy == 0 && Q.ddp_lautenbach_adopted && !Q.return_to_normalcy && (Q.lautenbach_adopted <= Q.ddp_lautenbach_rally || !Q.ddp_in_government)) {
            window.ddp_rally_lautenbach();
        } else {
            window.ddp_rally_local();
        }
    } else if (Q.ddp_leader == "Stolper" || Q.ddp_leader == "Dietrich") {
        window.ddp_rally_nationalism();
    } else if (Q.ddp_leader == "Maier" || Q.ddp_leader == "Heuss" || Q.ddp_leader == "Koch-Weser") {
        window.ddp_rally_democracy();
    }
};

window.ddp_rally_collaboration = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp_rally_collaboration');
    Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
        Q.old_middle_ddp += 2*(1-Q.ddp_dissent);

        if (Q.workers_schleicher_bonus > 0) {
            Q.workers_ddp += 2*(1-Q.ddp_dissent); 
            Q.unemployed_ddp += 2*(1-Q.ddp_dissent);
        }

        
        if (Q.workers_schleicher_bonus > 1) {
            Q.workers_ddp += 2*(1-Q.ddp_dissent);
            Q.unemployed_ddp += 2*(1-Q.ddp_dissent);
        }

        Q.dvp_right += 1;
        Q.ddp_right += 1;
        Q.lvp_right += 1;
        
        Q.ddp_business_strength += 3;

        Q.ddp_labor_dissent -= 3;
        Q.ddp_liberal_dissent -= 3;
        Q.ddp_business_dissent -= 3;
        Q.ddp_regionalist_dissent -= 3;
        Q.ddp_autocratization += 1;
        
        Q.dvp_industrialist_strength += 3;
        Q.z_conservative_strength += 3;
};

window.ddp_rally_welfare = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp_rally_welfare');
    Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.workers_ddp += 1*(1-Q.ddp_dissent);

    if (Q.welfare > 0) {
        Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
        Q.workers_ddp += 2*(1-Q.ddp_dissent);
        Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
    }

    Q.ddp_left += 0.5;

    Q.ddp_liberal_strength += 3;
    Q.ddp_labor_strength += 3;
    
    Q.ddp_labor_dissent -= 3;
    Q.ddp_liberal_dissent -= 3;

    Q.ddp_autocratization += 1;
};

window.ddp_rally_nationalism = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp_rally_nationalism');
    Q.nationalism += 3*(1-Q.ddp_dissent);
        
    Q.ddp_autocratization += 1;
    Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 1*(1-Q.ddp_dissent);

    if (Q.ddp_autocratization >= 3) {
        Q.workers_ddp += 1*(1-Q.ddp_dissent);
        Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
        Q.pro_republic -= 3*(1-Q.ddp_dissent);

        if (Q.nationalism >= 60) {
            Q.ddp_right += 0.5;
            Q.dvp_right += 0.5;

            Q.ddp_regionalist_strength += 3;
            Q.dvp_nationalist_strength += 3;
            Q.z_conservative_strength += 3;
        }
    }
};


window.ddp_rally_democracy = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp_rally_democracy');
    Q.ddp_democratization += 1;

    Q.pro_republic += 3*(1 - Q.ddp_dissent);

    if (Q.ddp_democratization >= 3) {
        Q.workers_ddp += 1*(1-Q.ddp_dissent);
        Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
        Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
        Q.old_middle_ddp += 1*(1-Q.ddp_dissent);
    }

    if (Q.pro_republic >= 70) {
        Q.ddp_left += 0.5;
        Q.dvp_left += 0.5;
        
        Q.ddp_liberal_strength += 3;
        Q.dvp_liberal_strength += 3;
        Q.z_center_strength += 3;
    }
};

window.ddp_rally_lautenbach = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp_rally_lautenbach');
    Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.workers_ddp += 2*(1-Q.ddp_dissent);
    Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
    Q.rural_ddp += 1*(1-Q.ddp_dissent);

    if (Q.lautenbach_adopted) {
        Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
        Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
        Q.workers_ddp += 2*(1-Q.ddp_dissent);
        Q.unemployed_ddp += 2*(1-Q.ddp_dissent);
        Q.rural_ddp += 1*(1-Q.ddp_dissent);
    }
    
    Q.ddp_lautenbach_rally += 1;
};

window.ddp_rally_local = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp_rally_local');
    Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
    Q.workers_ddp += 2*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
};