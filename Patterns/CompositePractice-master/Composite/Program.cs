using Composite.BL;
using System;

namespace Composite
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create a tree structure 

            CompositeElement root =
              new CompositeElement("McDonald's A.K.A. Macca's");
            root.Add(new PrimitiveElement("Big Mac"));
            root.Add(new PrimitiveElement("Quarter Pounder with Cheese"));
            root.Add(new PrimitiveElement("McNifica"));

            // Create a branch

            CompositeElement comp =
              new CompositeElement("Burger King A.K.A. Hungry Jacks");
            comp.Add(new PrimitiveElement("Whopper"));
            comp.Add(new PrimitiveElement("Big King"));
            comp.Add(new PrimitiveElement("Crispy King"));
            root.Add(comp);

            // Create a branch

            CompositeElement carls =
              new CompositeElement("Carl's Jr.");
            carls.Add(new PrimitiveElement("Famous Star"));
            carls.Add(new PrimitiveElement("Western Bacon"));
            carls.Add(new PrimitiveElement("Diablo"));
            root.Add(carls);

            // Create a branch

            CompositeElement innout =
              new CompositeElement("In 'n' Out");
            innout.Add(new PrimitiveElement("Double-Double"));
            innout.Add(new PrimitiveElement("Cheeseburger"));
            innout.Add(new PrimitiveElement("Hamburger"));
            root.Add(innout);

            // Add and remove a PrimitiveElement

            PrimitiveElement pe =
              new PrimitiveElement("Yellow Line");
            root.Add(pe);
            root.Remove(pe);

            // Recursively display nodes

            root.Display(1);

            // Wait for user

            Console.ReadKey();
        }
    }
}
