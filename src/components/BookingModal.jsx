import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const BookingModal = ({ ride, onConfirm, onCancel, isBooking }) => {
  return (
    <Dialog open={!!ride} onOpenChange={onCancel}>
      {ride && (
        <DialogContent>
          <DialogTitle className="text-xl font-semibold">
            Confirm Booking
          </DialogTitle>

          <DialogDescription className="text-gray-600">
            You are booking a ride with <strong>{ride.driver.name}</strong>. The fare
            is <strong>KES{ride.fare}</strong>.
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
