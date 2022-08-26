import java.util.*;
public class personDetails
{
	void personDetails()
	{
      name="Kalyani";
      favClr="Black";
      outfit="Formals"
	}
}
class suggestionForDress
{
public static void main(String args[])
{
	if(personDetails.name=="Kalyani" || personDetails.favClr=="Black")
	{
		System.out.println("Suggestion for Outfit is "+ outfit +"of" +favClr+"color");
	}
}
}