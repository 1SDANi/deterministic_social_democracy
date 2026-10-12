window.kpd_rally = function() {
    console.log('kpd rally');
    if ((dendryUI.dendryEngine.state.qualities.year == 1928 && dendryUI.dendryEngine.state.qualities.month == 1) || (dendryUI.dendryEngine.state.qualities.next_election_time - dendryUI.dendryEngine.state.qualities.time <= 6)) {
        dendryUI.dendryEngine.state.qualities.kpd_rally_timer = 2;
    } else {
        dendryUI.dendryEngine.state.qualities.kpd_rally_timer = 6;
    }

    if (dendryUI.dendryEngine.state.qualities.sa_force > 25 && !dendryUI.dendryEngine.state.qualities.sa_banned && !dendryUI.dendryEngine.state.qualities.return_to_normalcy) {
        window.rfb_protect();
    } else {
        window.kpd_rally_results();
    }
};

window.rfb_protect = function() {
    console.log('rfb protect');
    dendryUI.dendryEngine.state.qualities.rfb_success = dendryUI.dendryEngine.state.qualities.rfb_strength*dendryUI.dendryEngine.state.qualities.rfb_militancy - dendryUI.dendryEngine.state.qualities.sa_strength*dendryUI.dendryEngine.state.qualities.sa_militancy;

    dendryUI.dendryEngine.state.qualities.strife += 0.125;

    if (dendryUI.dendryEngine.state.qualities.rfb_success >= 0) {
        dendryUI.dendryEngine.state.qualities.strife += 0.125;
        window.kpd_rally_results();
    } else {
        window.rfb_protect_lose()
    }
};

window.rfb_protect_lose = function() {
    console.log('rfb protect lose');
    dendryUI.dendryEngine.state.qualities.workers_nsdap += 3;
    dendryUI.dendryEngine.state.qualities.rfb_strength -= 50;
};

window.kpd_rally_results = function() {
    console.log('kpd rally results');
    if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Thälmann") {
        window.kpd_rally_struggle();
    } else if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Conciliators") {
        if (dendryUI.dendryEngine.state.qualities.socializations > 0) {
            window.kpd_rally_councils();
        } else if (dendryUI.dendryEngine.state.qualities.return_to_normalcy) {
            window.kpd_rally_pacifism();
        } else {
            window.kpd_rally_local();
        }
    } else if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Brandlerites") {
        if (dendryUI.dendryEngine.state.qualities.kpd_in_government && !dendryUI.dendryEngine.state.qualities.nazi_peak_triggered && !dendryUI.dendryEngine.state.qualities.return_to_normalcy && !(dendryUI.dendryEngine.state.qualities.kpd_wtb_adopted = 1 || dendryUI.dendryEngine.state.qualities.wtb_implemented <= dendryUI.dendryEngine.state.qualities.kpd_wtb_rally)) {
            window.kpd_rally_democracy()
        } else if (dendryUI.dendryEngine.state.qualities.kpd_wtb_adopted && !dendryUI.dendryEngine.state.qualities.return_to_normalcy && (dendryUI.dendryEngine.state.qualities.wtb_implemented <= dendryUI.dendryEngine.state.qualities.kpd_wtb_rally || !dendryUI.dendryEngine.state.qualities.kpd_in_government)) {
            window.kpd_rally_wtb();
        } else {
            window.kpd_rally_local();
        }
    }
};

window.kpd_rally_struggle = function() {
    console.log('kpd rally struggle');
    dendryUI.dendryEngine.state.qualities.workers_kpd += 5*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_kpd += 6*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);

    if (dendryUI.dendryEngine.state.qualities.nationalization_progress) {
        dendryUI.dendryEngine.state.qualities.workers_kpd += 3*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_kpd += 4*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    }

    dendryUI.dendryEngine.state.qualities.kpd_stalinist_strength += 5;
    
    dendryUI.dendryEngine.state.qualities.kpd_stalinist_dissent -= 5;

    dendryUI.dendryEngine.state.qualities.old_middle_kpd -= 3;
    dendryUI.dendryEngine.state.qualities.new_middle_kpd -= 2;
    
    dendryUI.dendryEngine.state.qualities.rfb_force += 4*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
};

window.kpd_rally_councils = function() {
    console.log('kpd rally councils');
    dendryUI.dendryEngine.state.qualities.unemployed_kpd += 3*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);

    if (dendryUI.dendryEngine.state.qualities.socializations) {
        dendryUI.dendryEngine.state.qualities.unemployed_kpd += 3*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.workers_kpd += 3*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    }

    if (dendryUI.dendryEngine.state.qualities.socializations > 1) {
        dendryUI.dendryEngine.state.qualities.workers_kpd += 4*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.kpd_brandlerite_strength += 3;
    dendryUI.dendryEngine.state.qualities.kpd_conciliator_strength += 4;

    dendryUI.dendryEngine.state.qualities.kpd_conciliator_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.kpd_brandlerite_dissent -= 3;

    dendryUI.dendryEngine.state.qualities.rfb_force += 4*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
};

window.kpd_rally_pacifism = function() {
    console.log('kpd rally pacifism');
    dendryUI.dendryEngine.state.qualities.kpd_pacifism += 1;
    dendryUI.dendryEngine.state.qualities.nationalism -= 3*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);

    if (dendryUI.dendryEngine.state.qualities.kpd_pacifism >= 3) {
        dendryUI.dendryEngine.state.qualities.unemployed_kpd += 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.workers_kpd += 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_kpd += 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);

        dendryUI.dendryEngine.state.qualities.nationalism -= 3*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        
        if (dendryUI.dendryEngine.state.qualities.nationalism <= 50) {
            dendryUI.dendryEngine.state.qualities.kpd_conciliator_strength += 3
        }
    }
};

window.kpd_rally_democracy = function() {
    console.log('kpd rally democracy');
    dendryUI.dendryEngine.state.qualities.kpd_democratization += 1;
    dendryUI.dendryEngine.state.qualities.pro_republic += 3*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    if (dendryUI.dendryEngine.state.qualities.kpd_democratization >= 3) {
        dendryUI.dendryEngine.state.qualities.unemployed_kpd += 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.workers_kpd += 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_kpd += 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    }
    
    if (dendryUI.dendryEngine.state.qualities.pro_republic >= 70) {
        dendryUI.dendryEngine.state.qualities.kpd_brandlerite_strength += 3;
    }
};

window.kpd_rally_wtb = function() {
    console.log('kpd rally wtb');
    dendryUI.dendryEngine.state.qualities.unemployed_kpd += 5*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.workers_kpd += 4*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_kpd += 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);

    if (dendryUI.dendryEngine.state.qualities.wtb_implemented) {
        dendryUI.dendryEngine.state.qualities.unemployed_kpd += 4*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.workers_kpd += 3*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_kpd += 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.rural_kpd += 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.kpd_wtb_rally += 1;
};

window.kpd_rally_local = function() {
    console.log('kpd rally local');
    unemployed_kpd += 4*(1-kpd_dissent);
    workers_kpd += 3*(1-kpd_dissent);
    new_middle_kpd += 2*(1-kpd_dissent);
};