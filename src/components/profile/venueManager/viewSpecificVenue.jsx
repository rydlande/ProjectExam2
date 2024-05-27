export function VenueDetailsCard({ venue }) {
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  return (
      <div className="bg-white p-4 w-full">
          <div className="mb-4">
              <h2 className="text-2xl font-semibold">{venue.name}</h2>
              <p>Rating {venue.rating}</p>
          </div>
          <h3 className="text-xl font-semibold mb-2">Bookings</h3>
          {venue.bookings.length === 0 ? (
              <p>No active bookings to show</p>
          ) : (
              <>
                  <div className="md:hidden">
                      {venue.bookings.map((booking) => {
                          const nights = Math.ceil(
                              (new Date(booking.dateTo) - new Date(booking.dateFrom)) /
                                  (1000 * 60 * 60 * 24) - 1
                          );
                          return (
                              <div key={booking.id} className="border rounded mb-2 p-2">
                                  <div className="flex justify-between">
                                      <span>{`${formatDate(booking.dateFrom)} - ${formatDate(booking.dateTo)}`}</span>
                                      <span>{booking.customer.name}</span>
                                  </div>
                                  <div>
                                      <span>Guests: {booking.guests}</span>
                                  </div>
                                  <div>
                                      <span>Booking Date: {formatDate(booking.created)}</span>
                                  </div>
                                  {booking.created !== booking.updated && (
                                      <div>
                                          <span>Updated Date: {formatDate(booking.updated)}</span>
                                      </div>
                                  )}
                                  <div>
                                      <span>Duration: {nights} nights</span>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
                  <div className="hidden md:block">
                      <table className="w-full text-left">
                          <thead>
                              <tr>
                                  <th>Date</th>
                                  <th>Booked By</th>
                                  <th>Guests</th>
                                  <th>Booking Date</th>
                                  <th>Updated Date</th>
                                  <th>Duration</th>
                              </tr>
                          </thead>
                          <tbody>
                              {venue.bookings.map((booking) => {
                                  const nights = Math.ceil(
                                      (new Date(booking.dateTo) - new Date(booking.dateFrom)) /
                                          (1000 * 60 * 60 * 24) - 1
                                  );
                                  return (
                                      <tr key={booking.id}>
                                          <td>{`${formatDate(booking.dateFrom)} - ${formatDate(booking.dateTo)}`}</td>
                                          <td>{booking.customer.name}</td>
                                          <td>{booking.guests}</td>
                                          <td>{formatDate(booking.created)}</td>
                                          <td>{booking.created !== booking.updated ? formatDate(booking.updated) : ''}</td>
                                          <td>{nights} nights</td>
                                      </tr>
                                  );
                              })}
                          </tbody>
                      </table>
                  </div>
              </>
          )}
      </div>
  );
}
