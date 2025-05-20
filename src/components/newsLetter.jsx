export default function NewsletterSubscription() {
  return (
    <div className="max-w-xl  bg-gray-00 *:text-gray-400">
      <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
      <p className="text-base-content mb-4">
        Join our mailing list for updates and special offers.
      </p>
      <form className="form-control">
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="placeholder:text-gray-500"
            required
          />
        </label>
        <button type="submit" className="btn btn-primary w-[320px] ">
          Subscribe
        </button>
      </form>
    </div>
  );
}
