function showLeftIco(position) 
{            
  document.getElementById(position).style.display = 'inline-block';
  console.log('Icon "'+ position + '" shows up');
}
    
function hideLeftIco(position) 
{            
  document.getElementById(position).style.display = 'none';
  console.log('Icon "'+ position + '" hid');      
}