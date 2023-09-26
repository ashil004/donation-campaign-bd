const getStoredDonastionApplication = () =>{
    const storedDonastionAppliction =localStorage.getItem('Donate-Application');
    if(storedDonastionAppliction){
        return JSON.parse(storedDonastionAppliction);
    }
    return [] ;
} 
const saveDonastionApplication =Card=>{
    const storedDonastionAppliction =getStoredDonastionApplication();
    const exists =storedDonastionAppliction.find(dataCard => dataCard===Card);
    if(!exists){
        storedDonastionAppliction.push(Card);
        localStorage.setItem('Donate-Application',JSON.stringify(storedDonastionAppliction));
    }

}
export {getStoredDonastionApplication,saveDonastionApplication}