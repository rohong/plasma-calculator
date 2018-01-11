function clearForm(form){
    document.getElementById("input").reset();
    document.getElementById("freq").reset();
    document.getElementById("lengths").reset();
    document.getElementById("velocities").reset();
}

function computeform(form){
    var B = document.forms[0].B.value;
    var ne = document.forms[0].ne.value;
    var Te = document.forms[0].Te.value;
    var Ti = document.forms[0].Ti.value;
    var mu = document.forms[0].mu.value;
    var Z = document.forms[0].Z.value;
    var CL = document.forms[0].CL.value;
    var en = 3;

    // Frequencies
    document.forms[1].nu_e.value = (2.91e-6*ne*CL/Math.pow(Te,1.5)).toExponential(en);
    document.forms[1].nu_i.value = (4.8e-8*Math.pow(Z,4)*ne*CL/Math.pow(Ti,1.5)/Math.pow(mu,1.5)).toExponential(en);
    document.forms[1].f_ce.value = (2.8e6*B).toExponential(en);
    document.forms[1].f_ci.value = (1.52e3*B*Z/mu).toExponential(en);
    document.forms[1].f_pe.value = (8.98e3*Math.sqrt(ne)).toExponential(en);
    document.forms[1].f_pi.value = (2.1e2*Z*Math.sqrt(ne/mu)).toExponential(en);

    // Lengths
    document.forms[2].r_ce.value = (2.38*Math.sqrt(Te)/B).toExponential(en);
    document.forms[2].r_ci.value = (1.02e2*Math.sqrt(Ti*mu)/B/Z).toExponential(en);
    document.forms[2].r_s.value = (1.02e2*Math.sqrt(Te*mu)/B/Z).toExponential(en);
    document.forms[2].l_se.value = (5.31e5/Math.sqrt(ne)).toExponential(en);
    document.forms[2].l_si.value = (2.28e7*Math.sqrt(mu/ne)/Z).toExponential(en);
    document.forms[2].l_d.value = (7.43e2*Math.sqrt(Te/ne)).toExponential(en);

    // Velocities
    document.forms[3].v_te.value = (4.19e5*Math.sqrt(Te)).toExponential(en);
    document.forms[3].v_ti.value = (9.79e3*Math.sqrt(Ti/mu)).toExponential(en);
    document.forms[3].c_s.value = (9.79e3*Math.sqrt(Z*Te/mu)).toExponential(en);
    document.forms[3].v_A.value = (2.8e9*B/Math.sqrt(mu*ne)).toExponential(en);

    return;
} 