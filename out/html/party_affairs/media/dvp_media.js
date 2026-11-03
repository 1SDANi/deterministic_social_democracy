window.dvp_media = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp media');

    Q.dvp_media_timer += 6;
    Q.dvp_media_post_timer = 1;

    if (Q.dvp_dissent > 0.2) {
        window.dvp_media_editorials();
    } else if (Q.dvp_newspaper == 0 && Q.dvp_resources >= 3) {
        window.dvp_media_newspaper();
    } else if (Q.dvp_newspaper > 0 && Q.dvp_newspaper <= 3 && Q.dvp_resources >= 1) {
        window.dvp_media_newspaper_2();
    } else if (Q.dvp_newspaper > 3 && Q.dvp_radio == 0 && Q.dvp_resources >= 5) {
        window.dvp_media_radio();
    } else if (Q.dvp_radio > 0 && Q.dvp_radio > 0 && Q.dvp_radio <= 3 && dvp_resources >= 2) {
        window.dvp_media_radio_2();
    } else if (Q.dvp_radio > 3) {
        window.dvp_media_radio_3();
    } else if  (Q.dvp_newspaper > 3) {
        window.dvp_media_newspaper_3();
    } else {
        window.dvp_media_campaign();
    }
};

window.dvp_media_campaign = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.dvp_campaign_media += 1;
    Q.new_middle_dvp += 2*(1-Q.dvp_dissent);
    Q.old_middle_dvp += 2*(1-Q.dvp_dissent);
};

window.dvp_media_editorials = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_labor_dissent -= 6;
    Q.dvp_liberal_dissent -= 6;
    Q.dvp_industrialist_dissent -= 6;
    Q.dvp_nationalist_dissent -= 6;
};

window.dvp_media_newspaper = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_newspaper += 1;
    
    Q.dvp_resources -= 3;

    Q.new_middle_dvp += 3*(1 - Q.dvp_dissent);
    Q.old_middle_dvp += 3*(1 - Q.dvp_dissent);
    
    if (Q.dvp_democratization > 1) {
        Q.pro_republic += 2*(1-Q.dvp_dissent);
    }
};

window.dvp_media_newspaper_2 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_newspaper += 1;
    
    Q.resources -= 1;
    
    Q.new_middle_dvp += 4*(1 - Q.dvp_dissent);
    Q.old_middle_dvp += 4*(1 - Q.dvp_dissent);

    if (Q.dvp_labor_strength > Q.dvp_nationalist_strength + Q.dvp_industrialist_strength) {
        Q.workers_dvp += 1*(1 - Q.dissent);
    }
    
    if (Q.dvp_democratization > 1) {
        Q.pro_republic += 2*(1-Q.dvp_dissent);
    }
};

window.dvp_media_newspaper_3 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_newspaper += 1;
    
    Q.new_middle_dvp += 4*(1 - Q.dissent);
    Q.old_middle_dvp += 4*(1 - Q.dissent);

    if (Q.dvp_labor_strength > Q.dvp_nationalist_strength + Q.dvp_industrialist_strength) {
        Q.workers_dvp += 1*(1 - Q.dissent);
    }
    
    Q.rural_dvp += 2*(1 - Q.dissent);

    if (Q.dvp_democratization > 1) {
        Q.pro_republic += 2*(1-Q.dvp_dissent);
    }
};

window.dvp_media_radio = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_radio += 1;
    
    Q.dvp_resources -= 5;
    
    Q.new_middle_dvp += 4*(1 - Q.dissent);
    Q.old_middle_dvp += 3*(1 - Q.dissent);
    Q.workers_dvp += 1*(1 - Q.dissent);
    
    socialism -= 3*(1 - Q.dvp_dissent);

    if (Q.dvp_democratization > 1) {
        Q.pro_republic += 2*(1-Q.dvp_dissent);
    }
};

window.dvp_media_radio_2 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_radio += 1;
    
    Q.dvp_resources -= 2;
    
    Q.new_middle_dvp += 5*(1 - Q.dissent);
    Q.old_middle_dvp += 3*(1 - Q.dissent);
    Q.workers_dvp += 1*(1 - Q.dissent);
    
    Q.socialism -= 3*(1 - Q.dissent);

    if (Q.dvp_democratization > 1) {
        Q.pro_republic += 2*(1-Q.dvp_dissent);
    }
};

window.dvp_media_radio_2 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.dvp_radio += 1;
    
    Q.new_middle_dvp += 5*(1 - Q.dissent);
    Q.old_middle_dvp += 4*(1 - Q.dissent);
    Q.workers_dvp += 1*(1 - Q.dissent);
    Q.rural_dvp += 3*(1 - Q.dissent);
    Q.unemployed_dvp += 2*(1-Q.dissent);
    
    Q.socialism -= 3*(1 - Q.dissent);

    if (Q.dvp_democratization > 1) {
        Q.pro_republic += 2*(1-Q.dvp_dissent);
    }
}