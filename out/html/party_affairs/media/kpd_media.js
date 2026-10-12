window.kpd_media = function() {
    console.log('kpd media');
    if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Thälmann") {
        if (dendryUI.dendryEngine.state.qualities.kpd_stalinist_strength < 80) {
            window.kpd_media_ideological();
        } else if (dendryUI.dendryEngine.state.qualities.year >= 1930 && dendryUI.dendryEngine.state.qualities.anticommunist_force >= 30 && !dendryUI.dendryEngine.state.qualities.return_to_normalcy) {
            window.kpd_media_mobilize();
        } else {
            window.kpd_media_campaign();
        }
    } else if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Conciliators") {
        if (dendryUI.dendryEngine.state.qualities.kpd_conciliator_strength < 70) {
            window.kpd_media_ideological();
        } else if (dendryUI.dendryEngine.state.qualities.year >= 1930 && dendryUI.dendryEngine.state.qualities.noncommunist_force >= dendryUI.dendryEngine.state.qualities.rfb_force && !dendryUI.dendryEngine.state.qualities.return_to_normalcy) {
            window.kpd_media_mobilize();
        } else {
            window.kpd_media_campaign();
        }
    } else if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Brandlerites") {
        if (dendryUI.dendryEngine.state.qualities.kpd_brandlerite_strength < 60) {
            window.kpd_media_ideological();
        } else if (dendryUI.dendryEngine.state.qualities.year >= 1930 && dendryUI.dendryEngine.state.qualities.anticommunist_force >= dendryUI.dendryEngine.state.qualities.left_force && !dendryUI.dendryEngine.state.qualities.return_to_normalcy) {
            window.kpd_media_mobilize();
        } else if (dendryUI.dendryEngine.state.qualities.kpd_radio == 0) {
            if (dendryUI.dendryEngine.state.qualities.kpd_resources >= 2) {
                window.kpd_media_radio();
            } else {
                window.kpd_media_ideological();
            }
        } else if (dendryUI.dendryEngine.state.qualities.kpd_radio > 3 && dendryUI.dendryEngine.state.qualities.kpd_radio <= 5 && dendryUI.dendryEngine.state.qualities.year <= 1931) {
            window.kpd_media_radio_3();
        } else if (dendryUI.dendryEngine.state.qualities.kpd_resources >= 1) {
            if (dendryUI.dendryEngine.state.qualities.kpd_radio > 0 && dendryUI.dendryEngine.state.qualities.kpd_radio <= 3) {
                window.kpd_media_radio_2();
            } else if (dendryUI.dendryEngine.state.qualities.kpd_radio > 3 && (dendryUI.dendryEngine.state.qualities.radio >= 6 || dendryUI.dendryEngine.state.qualities.year >= 1932) && dendryUI.dendryEngine.state.qualities.kpd_radio <= 9) {
                window.kpd_media_radio_4();
            } else {
                window.kpd_media_ideological();
            }
        } else {
            window.kpd_media_ideological();
        }
    }
};

window.kpd_media_mobilize = function() {
    dendryUI.dendryEngine.state.qualities.rfb_strength += 50;
    dendryUI.dendryEngine.state.qualities.rfb_militancy += 0.02;
    
    if (dendryUI.dendryEngine.state.qualities.kpd_wholesome) {
        dendryUI.dendryEngine.state.qualities.workers_nsdap -= 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_nsdap -= 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    } else {
        dendryUI.dendryEngine.state.qualities.workers_spd -= 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_spd -= 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    }

    if (dendryUI.dendryEngine.state.qualities.dnf_formed) {
        dendryUI.dendryEngine.state.qualities.workers_dnf -= 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_dnf -= 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    } else {
        dendryUI.dendryEngine.state.qualities.workers_dnvp -= 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_dnvp -= 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    }

    dendryUI.dendryEngine.state.qualities.workers_kpd += 1*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_kpd += 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
};

window.kpd_media_campaign = function() {
    dendryUI.dendryEngine.state.qualities.workers_kpd += 2*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_kpd += 4*(1-dendryUI.dendryEngine.state.qualities.kpd_dissent);
};

window.kpd_media_ideological = function() {
    if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Thälmann") {
        dendryUI.dendryEngine.state.qualities.kpd_stalinist_strength += 3;
        dendryUI.dendryEngine.state.qualities.kpd_weddinger_strength -= 3;
        dendryUI.dendryEngine.state.qualities.kpd_conciliator_strength -= 3;
        dendryUI.dendryEngine.state.qualities.kpd_brandlerite_strength -= 3;

        dendryUI.dendryEngine.state.qualities.kpd_stalinist_dissent -= 10;
    } else if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Conciliators") {
        dendryUI.dendryEngine.state.qualities.kpd_conciliator_strength += 3;
        dendryUI.dendryEngine.state.qualities.kpd_weddinger_strength -= 3;
        dendryUI.dendryEngine.state.qualities.kpd_stalinist_strength -= 3;
        dendryUI.dendryEngine.state.qualities.kpd_brandlerite_strength -= 3;

        dendryUI.dendryEngine.state.qualities.kpd_conciliator_dissent -= 10;
    } else if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Brandlerites") {
        dendryUI.dendryEngine.state.qualities.kpd_brandlerite_strength += 3;
        dendryUI.dendryEngine.state.qualities.kpd_conciliator_strength -= 3;
        dendryUI.dendryEngine.state.qualities.kpd_weddinger_strength -= 3;
        dendryUI.dendryEngine.state.qualities.kpd_stalinist_strength -= 3;

        dendryUI.dendryEngine.state.qualities.kpd_brandlerite_dissent -= 10;
    } else if (dendryUI.dendryEngine.state.qualities.kpd_leader == "Weddingers") {
        dendryUI.dendryEngine.state.qualities.kpd_weddinger_strength += 3;
        dendryUI.dendryEngine.state.qualities.kpd_conciliator_strength -= 3;
        dendryUI.dendryEngine.state.qualities.kpd_stalinist_strength += 3;
        dendryUI.dendryEngine.state.qualities.kpd_brandlerite_strength -= 3;

        dendryUI.dendryEngine.state.qualities.kpd_weddinger_dissent -= 10;
    }
};

window.kpd_media_radio = function() {
    dendryUI.dendryEngine.state.qualities.kpd_radio += 1;
    dendryUI.dendryEngine.state.qualities.kpd_resources -= 2;
    
    dendryUI.dendryEngine.state.qualities.new_middle_kpd += 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_kpd += 1*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.workers_kpd += 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);

    dendryUI.dendryEngine.state.qualities.kpd_weddinger_dissent += 10;
    dendryUI.dendryEngine.state.qualities.kpd_stalinist_dissent += 10;
    dendryUI.dendryEngine.state.qualities.kpd_conciliator_dissent += 5;

    dendryUI.dendryEngine.state.qualities.socialism += 4*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent); 
    dendryUI.dendryEngine.state.qualities.nationalism -= 1*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);

    if (dendryUI.dendryEngine.state.qualities.kpd_pacifism > 1) {
        dendryUI.dendryEngine.state.qualities.nationalism -= 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    }
};

window.kpd_media_radio_2 = function() {
    dendryUI.dendryEngine.state.qualities.kpd_radio += 1;
    dendryUI.dendryEngine.state.qualities.kpd_resources -= 1;

    dendryUI.dendryEngine.state.qualities.new_middle_kpd += 3*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_kpd += 1*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    
    dendryUI.dendryEngine.state.qualities.workers_kpd += 3*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    
    dendryUI.dendryEngine.state.qualities.socialism += 4*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.nationalism -= 1*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    
    if (dendryUI.dendryEngine.state.qualities.kpd_pacifism > 2) {
        dendryUI.dendryEngine.state.qualities.nationalism -= 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent) * (dendryUI.dendryEngine.state.qualities.kpd_pacifism - 2);
    }
};

window.kpd_media_radio_3 = function() {
    dendryUI.dendryEngine.state.qualities.kpd_radio += 1;

    dendryUI.dendryEngine.state.qualities.new_middle_kpd += 3*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_kpd += 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.rural_kpd += 1*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    
    dendryUI.dendryEngine.state.qualities.workers_kpd += 3*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_kpd += 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    
    dendryUI.dendryEngine.state.qualities.socialism += 4*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.nationalism -= 1*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    
    if (dendryUI.dendryEngine.state.qualities.kpd_pacifism > 2) {
        dendryUI.dendryEngine.state.qualities.nationalism -= 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent) * (dendryUI.dendryEngine.state.qualities.kpd_pacifism - 2);
    }
};

window.kpd_media_radio_4 = function() {
    dendryUI.dendryEngine.state.qualities.kpd_radio += 1;
    dendryUI.dendryEngine.state.qualities.kpd_resources -= 1;
    
    dendryUI.dendryEngine.state.qualities.new_middle_kpd += 3*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_kpd += 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.rural_kpd += 1*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    
    dendryUI.dendryEngine.state.qualities.workers_kpd += 3*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_kpd += 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    
    dendryUI.dendryEngine.state.qualities.socialism += 3*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    dendryUI.dendryEngine.state.qualities.nationalism -= 1*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent);
    
    if (dendryUI.dendryEngine.state.qualities.kpd_pacifism > 2) {
        dendryUI.dendryEngine.state.qualities.nationalism -= 2*(1 - dendryUI.dendryEngine.state.qualities.kpd_dissent) * (dendryUI.dendryEngine.state.qualities.kpd_pacifism - 2);
    }

};