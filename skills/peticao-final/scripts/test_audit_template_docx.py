import unittest
from audit_template_docx import close

class TestAuditTemplateDocx(unittest.TestCase):
    def test_close_exact_match(self):
        """Test with exactly equal values."""
        self.assertTrue(close(1000, 1000))
        self.assertTrue(close(0, 0))
        self.assertTrue(close(-500, -500))

    def test_close_within_default_tolerance(self):
        """Test values within the default tolerance of 1000."""
        self.assertTrue(close(1500, 1000))
        self.assertTrue(close(500, 1000))
        self.assertTrue(close(1000, 1500))
        self.assertTrue(close(1000, 500))

    def test_close_outside_default_tolerance(self):
        """Test values outside the default tolerance."""
        self.assertFalse(close(2001, 1000))
        self.assertFalse(close(-1, 1000))

    def test_close_custom_tolerance(self):
        """Test with a custom tolerance value."""
        self.assertTrue(close(100, 105, tolerance=5))
        self.assertTrue(close(105, 100, tolerance=5))
        self.assertFalse(close(100, 106, tolerance=5))
        self.assertTrue(close(100, 100, tolerance=0))
        self.assertFalse(close(100, 101, tolerance=0))

    def test_close_boundary_conditions(self):
        """Test values exactly at the boundary of the tolerance."""
        self.assertTrue(close(2000, 1000))
        self.assertTrue(close(0, 1000))
        self.assertTrue(close(1000, 2000))
        self.assertTrue(close(1000, 0))

    def test_close_string_inputs(self):
        """Test that string inputs that can be converted to int work."""
        self.assertTrue(close("1500", "1000"))
        self.assertTrue(close(1500, "1000"))
        self.assertTrue(close("1500", 1000))

    def test_close_float_inputs(self):
        """Test that float inputs are truncated to int."""
        self.assertTrue(close(1500.5, 1000.9))
        self.assertTrue(close(1000.9, 1000.1, tolerance=0))

    def test_close_invalid_inputs(self):
        """Test that invalid inputs raise ValueError."""
        with self.assertRaises(ValueError):
            close("invalid", 1000)
        with self.assertRaises(ValueError):
            close(1000, "invalid")

if __name__ == '__main__':
    unittest.main()
