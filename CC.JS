function rot13(str) { // LBH QVQ VG!
    var len = str.length;
    var deciphered = "";
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var alpha = alpha.toUpperCase();
    for (var i = 0; i < len; i++) {
        if (alpha.indexOf(str.charAt(i)) == -1) {
            deciphered += str.charAt(i);
        } else {
            if (alpha.indexOf(str.charAt(i)) >= alpha.length / 2) {
                deciphered += alpha.charAt(alpha.indexOf(str.charAt(i)) - 13)
            } else {
                var letterIndex = alpha.indexOf(str.charAt(i))
                var newIndex = letterIndex + 13;
                deciphered += alpha.charAt(newIndex);
            }
        }


    }
    return deciphered;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")