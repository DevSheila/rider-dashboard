import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Props:
// - ride: ride details (null or object)
// - onConfirm: function to handle booking confirmation
// - onCancel: function to handle booking cancellation
// - isBooking: boolean indicating if booking is in progress
const BookingModal = ({ ride, onConfirm, onCancel, isBooking }) => {
  
  return (
    <Dialog open={!!ride} onOpenChange={onCancel}>
      {ride && (
        <DialogContent>
          <DialogTitle className="text-xl font-semibold">
            Confirm Booking
          </DialogTitle>

          <DialogDescription className="text-gray-600">
            <p>
              You are booking a ride with <strong>
                {ride.driver.name}
              </strong>.
            </p>
            <p>
              The fare is <strong>KES {ride.rideModels.fare}</strong>.
            </p>
          </DialogDescription>
          <DialogFooter>
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button onClick={onConfirm} disabled={isBooking}>
              {isBooking ? "Booking..." : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default BookingModal;
