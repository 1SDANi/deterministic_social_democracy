window.ddp_rally = function() {
    if ((dendryUI.year == 1928 && dendryUI.month == 1) || (dendryUI.next_election_time - dendryUI.time <= 6)) {
        dendryUI.ddp_rally_timer = 2;
    } else {
        dendryUI.ddp_rally_timer = 6;
    }

    if (dendryUI.sa_force > 25 && !dendryUI.sa_banned && !dendryUI.return_to_normalcy) {
        if (dendryUI.ddp_ideology == "Left") {
            window.ddp_police_protect();
        }
    } else {
        window.ddp_rally_results();
    }
};

window.ddp_police_protect = function() {
    dendryUI.police_protect_success_ddp = dendryUI.prussian_police_loyalty_ddp*dendryUI.prussian_police_militancy*dendryUI.prussian_police_strength*2 - dendryUI.sa_strength*dendryUI.sa_militancy;

    if (dendryUI.police_protect_success_ddp >= 0) {
        window.ddp_rally_results()
    } else {
        window.ddp_police_protect_lose()
    }
};

window.ddp_police_protect_lose = function() {
    dendryUI.workers_nsdap += 3;
    strife += 0.125;
};

window.ddp_rally_results = function() {
    if (dendryUI.ddp_leader == "Mahraun") {
        window.ddp_rally_collaboration();
    } else if (dendryUI.ddp_leader == "Lüders") {
        if (dendryUI.welfare > 0) {
            window.ddp_rally_welfare();
        } else {
            window.ddp_rally_local();
        }
    } else if (dendryUI.ddp_leader == "Lemmer") {
        if (dendryUI.return_to_normalcy == 0 && dendryUI.ddp_lautenbach_adopted && !dendryUI.return_to_normalcy && (dendryUI.lautenbach_adopted <= dendryUI.ddp_lautenbach_rally || !dendryUI.ddp_in_government)) {
            window.ddp_rally_lautenbach();
        } else {
            window.ddp_rally_local();
        }
    } else if (dendryUI.ddp_leader == "Stolper" || dendryUI.ddp_leader == "Dietrich") {
        window.ddp_rally_nationalism();
    } else if (dendryUI.ddp_leader == "Maier" || dendryUI.ddp_leader == "Heuss" || dendryUI.ddp_leader == "Koch-Weser") {
        window.ddp_rally_democracy();
    }
};

window.ddp_rally_collaboration = function() {
    dendryUI.new_middle_ddp += 3*(1-dendryUI.ddp_dissent);
        dendryUI.old_middle_ddp += 2*(1-dendryUI.ddp_dissent);

        if (dendryUI.workers_schleicher_bonus > 0) {
            dendryUI.workers_ddp += 2*(1-dendryUI.ddp_dissent); 
            dendryUI.unemployed_ddp += 2*(1-dendryUI.ddp_dissent);
        }

        
        if (dendryUI.workers_schleicher_bonus > 1) {
            dendryUI.workers_ddp += 2*(1-dendryUI.ddp_dissent);
            dendryUI.unemployed_ddp += 2*(1-dendryUI.ddp_dissent);
        }

        dendryUI.dvp_right += 1;
        dendryUI.ddp_right += 1;
        dendryUI.lvp_right += 1;
        
        dendryUI.ddp_business_strength += 3;

        dendryUI.ddp_labor_dissent -= 3;
        dendryUI.ddp_liberal_dissent -= 3;
        dendryUI.ddp_business_dissent -= 3;
        dendryUI.ddp_regionalist_dissent -= 3;
        dendryUI.ddp_autocratization += 1;
        
        dendryUI.dvp_industrialist_strength += 3;
        dendryUI.z_conservative_strength += 3;
};

window.ddp_rally_welfare = function() {
    dendryUI.new_middle_ddp += 2*(1-dendryUI.ddp_dissent);
    dendryUI.workers_ddp += 1*(1-dendryUI.ddp_dissent);

    if (dendryUI.welfare > 0) {
        dendryUI.new_middle_ddp += 2*(1-dendryUI.ddp_dissent);
        dendryUI.workers_ddp += 2*(1-dendryUI.ddp_dissent);
        dendryUI.unemployed_ddp += 1*(1-dendryUI.ddp_dissent);
    }

    dendryUI.ddp_left += 0.5;

    dendryUI.ddp_liberal_strength += 3;
    dendryUI.ddp_labor_strength += 3;
    
    dendryUI.ddp_labor_dissent -= 3;
    dendryUI.ddp_liberal_dissent -= 3;

    dendryUI.ddp_autocratization += 1;
};

window.ddp_rally_nationalism = function() {
    dendryUI.nationalism += 3*(1-dendryUI.ddp_dissent);
        
    dendryUI.ddp_autocratization += 1;
    dendryUI.new_middle_ddp += 2*(1-dendryUI.ddp_dissent);
    dendryUI.old_middle_ddp += 1*(1-dendryUI.ddp_dissent);

    if (dendryUI.ddp_autocratization >= 3) {
        dendryUI.workers_ddp += 1*(1-dendryUI.ddp_dissent);
        dendryUI.unemployed_ddp += 1*(1-dendryUI.ddp_dissent);
        dendryUI.pro_republic -= 3*(1-dendryUI.ddp_dissent);

        if (dendryUI.nationalism >= 60) {
            dendryUI.ddp_right += 0.5;
            dendryUI.dvp_right += 0.5;

            dendryUI.ddp_regionalist_strength += 3;
            dendryUI.dvp_nationalist_strength += 3;
            dendryUI.z_conservative_strength += 3;
        }
    }
};


window.ddp_rally_democracy = function() {
    ddp_democratization += 1;

    pro_republic += 3*(1 - ddp_dissent);

    if (ddp_democratization >= 3) {
        workers_ddp += 1*(1-ddp_dissent);
        unemployed_ddp += 1*(1-ddp_dissent);
        new_middle_ddp += 2*(1-ddp_dissent);
        old_middle_ddp += 1*(1-ddp_dissent);
    }

    if (pro_republic >= 70) {
        ddp_left += 0.5;
        dvp_left += 0.5;
        
        ddp_liberal_strength += 3;
        dvp_liberal_strength += 3;
        z_center_strength += 3;
    }
};

window.ddp_rally_lautenbach = function() {
    dendryUI.new_middle_ddp += 3*(1-dendryUI.ddp_dissent);
    dendryUI.old_middle_ddp += 2*(1-dendryUI.ddp_dissent);
    dendryUI.workers_ddp += 2*(1-dendryUI.ddp_dissent);
    dendryUI.unemployed_ddp += 1*(1-dendryUI.ddp_dissent);
    dendryUI.rural_ddp += 1*(1-dendryUI.ddp_dissent);

    if (dendryUI.lautenbach_adopted) {
        dendryUI.new_middle_ddp += 3*(1-dendryUI.ddp_dissent);
        dendryUI.old_middle_ddp += 2*(1-dendryUI.ddp_dissent);
        dendryUI.workers_ddp += 2*(1-dendryUI.ddp_dissent);
        dendryUI.unemployed_ddp += 2*(1-dendryUI.ddp_dissent);
        dendryUI.rural_ddp += 1*(1-dendryUI.ddp_dissent);
    }
    
    dendryUI.ddp_lautenbach_rally += 1;
};

window.ddp_rally_local = function() {
    dendryUI.new_middle_ddp += 3*(1-dendryUI.ddp_dissent);
    dendryUI.workers_ddp += 2*(1-dendryUI.ddp_dissent);
    dendryUI.old_middle_ddp += 2*(1-dendryUI.ddp_dissent);
    dendryUI.unemployed_ddp += 1*(1-dendryUI.ddp_dissent);
};