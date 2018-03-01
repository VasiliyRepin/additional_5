module.exports = function check(str, bracketsConfig) 
{
  // your solution
    while (str.length > 0)
    {
        temp_str = str;

            for (var i =0; i < bracketsConfig.length;  i++)
            {
                rpl = bracketsConfig[i].join('');
                str = str.replace(rpl, '');
            }


            if (str == temp_str)
            {
                return false;
            }
    }

    return true;

}
