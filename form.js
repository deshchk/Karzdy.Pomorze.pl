window.addEventListener("load", function() {
    const form = document.getElementById('badanie');
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener("click", function() {
        const data = new FormData(form);

// Metryczka
        const cywilny = Number(data.get('cywilny'));
        const zaw = Number(data.get('zawód'));

        const szwd = Number(data.get('zwDni'));
        const szwt = Number(data.get('zwTyg'));
        const szwm = Number(data.get('zwMsc'));
        const szwy = Number(data.get('zwRok'));
            if (cywilny == 1 || cywilny == 2 || cywilny == 6 || cywilny == 7)
                { var staZw = -(szwd + (szwt * 7) + (szwm * 30.417) + (szwy * 365.3)) }
                else
                { var staZw = szwd + (szwt * 7) + (szwm * 30.417) + (szwy * 365.3) };
                data.append('staż związku', Math.round(staZw));
        const szad = Number(data.get('zaDni'));
        const szat = Number(data.get('zaTyg'));
        const szam = Number(data.get('zaMsc'));
        const szay = Number(data.get('zaRok'));
            if (zaw == 0)
                { var staZa = -(szad + (szat * 7) + (szam * 30.417) + (szay * 365.3)) }
                else
                { var staZa = szad + (szat * 7) + (szam * 30.417) + (szay * 365.3) };
                data.append('staż zatrudnienia', Math.round(staZa));
            
            if (zaw == 0)
                { data.set('stanPrac', '') & data.set('stanStud', '') & data.set('stypendium', '') }
                else if (zaw == 1)
                { data.set('stanStud', '') & data.set('stypendium', '') }
                else { data.set('stanPrac', '') };

// PIL

    // deklarowanie i przeliczanie pozycji odwróconych
        const pil1 = Number(data.get('pil1'));
        const pil2 = 8 - Number(data.get('pil2-r'));
            data.append('pil2', pil2);
        const pil3 = Number(data.get('pil3'));
        const pil4 = Number(data.get('pil4'));
        const pil5 = 8 - Number(data.get('pil5-r'));
            data.append('pil5', pil5);
        const pil6 = Number(data.get('pil6'));
        const pil7 = 8 - Number(data.get('pil7-r'));
            data.append('pil7', pil7);
        const pil8 = Number(data.get('pil8'));
        const pil9 = Number(data.get('pil9'));
        const pil10 = 8 - Number(data.get('pil10-r'));
            data.append('pil10', pil10);
        const pil11 = Number(data.get('pil11'));
        const pil12 = Number(data.get('pil12'));
        const pil13 = Number(data.get('pil13'));
        const pil14 = 8 - Number(data.get('pil14-r'));
            data.append('pil14', pil14);
        const pil15 = 8 - Number(data.get('pil15-r'));
            data.append('pil15', pil15);
        const pil16 = Number(data.get('pil16'));
        const pil17 = 8 - Number(data.get('pil17-r'));
            data.append('pil17', pil17);
        const pil18 = 8 - Number(data.get('pil18-r'));
            data.append('pil18', pil18);
        const pil19 = 8 - Number(data.get('pil19-r'));
            data.append('pil19', pil19);
        const pil20 = Number(data.get('pil20'));

    // PIL – Afirmacja życia
        const life = pil2 + pil4 + pil5 + pil6 + pil8 + pil9 + pil10 + pil19;
    data.append('afirmacja', life);

    // PIL – Akceptacja siebie
        const self = pil1 + pil12 + pil13;
    data.append('akceptacja', self);

    // PIL – Świadomość celu
        const goal = pil3 + pil11 + pil20;
    data.append('cel', goal);

    // PIL – Poczucie wolności
        const free = pil14 + pil18;
    data.append('wolność', free);

    // PIL – Ocena przyszłości
        const future = pil7 + pil17;
    data.append('przyszłość', future);

    // PIL – Stosunek wobec śmierci
        const death = pil15 + pil16;
        data.append('śmierć', death);

    // PIL – Jednoczynnikowy
        const jedno = pil4 + pil5 + pil9 + pil12 + pil17 + pil20;
    data.append('jedno', jedno);

    // PIL – Suma
        const pilAll = [
            pil1, pil2, pil3, pil4, pil5, pil6, pil7, pil8, pil9, pil10,
            pil11, pil12, pil13, pil14, pil15, pil16, pil17, pil18, pil19, pil20
        ];
    data.append('pilSum', pilAll.reduce( (total, curr) => total + curr ));


// sending data to Google Spreadsheet
        const action = 'https://script.google.com/macros/s/AKfycbwlyAffFlOfn7cResi31AszsGxLtADjRzzh7EBQKVOgQjS-arxjCEIPCQlug_qJgoMh/exec';
        fetch(action, {
        method: 'POST',
        body: data,
        })

        localStorage.clear();
    });
  });